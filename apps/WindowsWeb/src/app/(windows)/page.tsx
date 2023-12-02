'use client';

import { Grid, useDisclosure } from '@chakra-ui/react';
import React, {
	type MouseEventHandler,
	useCallback,
	useRef,
	useState,
} from 'react';
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
				bounds={{
					left: 0,
					top: 0,
					right: 0,
					bottom: 0,
					position: 'css',
				}}
				ref={moveableRef}
				snapContainer={dragContainerRef.current}
				snappable
				target={targets}
				draggable
				// eslint-disable-next-line react-perf/jsx-no-new-function-as-prop -- ignore
				onRender={(e) => {
					e.target.style.cssText += e.cssText;
				}}
				origin={false}
				/*  eslint-disable react-perf/jsx-no-new-function-as-prop -- ignore */
				onClickGroup={(e) => {
					selectoRef.current?.clickTarget(
						e.inputEvent as MouseEvent | TouchEvent,
						e.inputTarget
					);
				}}
				onRenderGroup={(e) => {
					e.events.forEach((ev) => {
						ev.target.style.cssText += ev.cssText;
					});
				}}
				/* eslint-enable react-perf/jsx-no-new-function-as-prop */
			/>
			<Selecto
				boundContainer
				continueSelect={false}
				continueSelectWithoutDeselect
				dragContainer={dragContainerRef.current}
				ref={selectoRef}
				selectByClick
				selectFromInside
				selectableTargets={['.desktop-icon']}
				toggleContinueSelect="shift"
				toggleContinueSelectWithoutDeselect={[['ctrl'], ['meta']]}
				hitRate={0}
				// eslint-disable-next-line react-perf/jsx-no-new-function-as-prop -- ignore
				onSelect={(e) => {
					e.added.forEach((el) => {
						el.classList.add('selected');
					});
					e.removed.forEach((el) => {
						el.classList.remove('selected');
					});

					setTargets(e.selected);
				}}
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
				className="elements"
				gap={1}
				gridAutoRows="min-content"
				gridTemplateColumns="repeat(auto-fill, minmax(90px, 1fr))"
				h="full"
				onContextMenu={handleContextMenu}
				textAlign="center"
			>
				{defaultDesktopApps.map((app, index) => (
					<DesktopIcon
						app={app}
						className={`desktop-icon ${
							app === selectedApp && appMenuDisclosure.isOpen
								? 'selected'
								: ''
						}`}
						gridRow={index + 1}
						key={app.processName}
						onContextMenu={handleAppContextMenu(app)}
					/>
				))}
			</Grid>

			<DesktopContextMenu
				position={menuPosition}
				{...desktopMenuDisclosure}
			/>

			{selectedApp ? (
				<AppContextMenu
					app={selectedApp}
					position={appMenuPosition}
					{...appMenuDisclosure}
				/>
			) : null}
		</main>
	);
}
