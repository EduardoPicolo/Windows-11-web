'use client';

import React, {
	type MouseEventHandler,
	useCallback,
	useRef,
	useState,
} from 'react';
import { Grid, useDisclosure } from '@chakra-ui/react';
import Moveable from 'react-moveable';
import Selecto from 'react-selecto';

import { AppContextMenu } from '@/components/AppContextMenu';
import { DesktopContextMenu } from '@/components/DesktopContextMenu';
import { DesktopIcon } from '@/components/DesktopIcon';
import { defaultDesktopApps } from '@/constants/defaultDesktopApps';

export default function Home() {
	const desktopMenuDisclosure = useDisclosure();

	const appMenuDisclosure = useDisclosure();

	const [selectedApp, setSelectedApp] = useState<App | null>(null);
	const selectedAppRef = useRef<HTMLDivElement>(null);

	/**
	 * Two position states are needed because when it changes, the menu
	 * still have to animate out and it needs to happen from the
	 * previous position.
	 */
	const [menuPosition, setMenuPosition] = useState({
		x: 0,
		y: 0,
	});
	const [appMenuPosition, setAppMenuPosition] = useState({
		x: 0,
		y: 0,
	});

	const handleContextMenu = useCallback<
		MouseEventHandler<HTMLDivElement>
	>(
		(e) => {
			e.preventDefault();

			if (
				(e.target as HTMLElement).className.includes(
					'desktop-icon'
				) ||
				(e.target as HTMLElement).tagName === 'P'
			) {
				console.log('Clicked desktop icon, not opening menu.');
				desktopMenuDisclosure.onClose();

				return;
			}

			setMenuPosition({
				x: e.clientX,
				y: e.clientY,
			});

			appMenuDisclosure.onClose();
			desktopMenuDisclosure.onOpen();
		},
		[appMenuDisclosure, desktopMenuDisclosure]
	);

	const handleAppContextMenu = useCallback(
		(app: App): MouseEventHandler<HTMLDivElement> =>
			(e) => {
				e.preventDefault();
				setSelectedApp(app);

				console.group('App menu');
				console.log('App:', app);
				console.log('Event:', e.clientX, e.clientY);
				console.groupEnd();

				setAppMenuPosition({
					x: e.clientX,
					y: e.clientY,
				});

				appMenuDisclosure.onOpen();
			},
		[appMenuDisclosure]
	);

	const [targets, setTargets] = useState<
		(HTMLElement | SVGElement)[]
	>([]);
	const moveableRef = useRef<Moveable>(null);
	const selectoRef = useRef<Selecto>(null);
	const dragContainerRef = useRef(null);

	return (
		<main ref={dragContainerRef}>
			<Moveable
				ref={moveableRef}
				target={targets}
				snapContainer={dragContainerRef.current}
				draggable
				snappable
				bounds={{
					left: 0,
					top: 0,
					right: 0,
					bottom: 0,
					position: 'css',
				}}
				origin={false}
				/*  eslint-disable react-perf/jsx-no-new-function-as-prop -- ignore */
				onClickGroup={(e) => {
					selectoRef.current?.clickTarget(
						e.inputEvent as MouseEvent | TouchEvent,
						e.inputTarget
					);
				}}
				onRender={(e) => {
					e.target.style.cssText += e.cssText;
				}}
				onRenderGroup={(e) => {
					e.events.forEach((ev) => {
						// eslint-disable-next-line no-param-reassign -- ignore
						ev.target.style.cssText += ev.cssText;
					});
				}}
				/* eslint-enable react-perf/jsx-no-new-function-as-prop */
			/>
			<Selecto
				ref={selectoRef}
				boundContainer
				dragContainer={dragContainerRef.current}
				selectableTargets={['.desktop-icon']}
				hitRate={0}
				selectByClick
				selectFromInside
				continueSelect={false}
				continueSelectWithoutDeselect
				toggleContinueSelect="shift"
				toggleContinueSelectWithoutDeselect={[['ctrl'], ['meta']]}
				ratio={0}
				/*  eslint-disable react-perf/jsx-no-new-function-as-prop -- ignore */
				onDragStart={(event) => {
					const target = (event.inputEvent as MouseEvent | TouchEvent)
						.target as Element;

					if (
						moveableRef.current?.isMoveableElement(target) ||
						targets.some((t) => t === target || t.contains(target))
					) {
						event.stop();
					}
				}}
				onSelect={(e) => {
					e.added.forEach((el) => {
						el.classList.add('selected');
					});
					e.removed.forEach((el) => {
						el.classList.remove('selected');
					});

					setTargets(e.selected);
				}}
				onSelectEnd={(event) => {
					if (event.isDragStartEnd) {
						(
							event.inputEvent as MouseEvent | TouchEvent
						).preventDefault();

						void moveableRef.current
							?.waitToChangeTarget()
							.then(
								() =>
									moveableRef.current?.dragStart(
										event.inputEvent as MouseEvent | TouchEvent
									)
							);
					}

					setTargets(event.selected);
				}}
				/* eslint-enable react-perf/jsx-no-new-function-as-prop */
			/>

			<Grid
				onContextMenu={handleContextMenu}
				className="elements"
				gridTemplateColumns="repeat(auto-fill, minmax(90px, 1fr))"
				gridTemplateRows="repeat(auto-fill, minmax(110px, 1fr));"
				gap={1}
				h="full"
				textAlign="center"
			>
				{defaultDesktopApps.map((app, index) => (
					<DesktopIcon
						key={app.processName}
						app={app}
						gridRow={index + 1}
						onContextMenu={handleAppContextMenu(app)}
						className={`desktop-icon ${
							app === selectedApp && appMenuDisclosure.isOpen
								? 'selected'
								: ''
						}`}
					/>
				))}
			</Grid>

			<DesktopContextMenu
				position={menuPosition}
				{...desktopMenuDisclosure}
			/>

			{selectedApp ? (
				<AppContextMenu
					position={appMenuPosition}
					app={selectedApp}
					{...appMenuDisclosure}
				/>
			) : null}
		</main>
	);
}
