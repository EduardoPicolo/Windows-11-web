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

import {
	EdgeApp,
	SpotifyApp,
	VSCodeApp,
} from '@/components/Apps/apps';
import { DesktopContextMenu } from '@/components/DesktopContextMenu';
import { DesktopIcon } from '@/components/DesktopIcon';

export default function Home() {
	const menuDisclosure = useDisclosure();

	const [menuPosition, setMenuPosition] = useState({
		x: 0,
		y: 0,
	});

	const handleContextMenu = useCallback<
		MouseEventHandler<HTMLDivElement>
	>(
		(e) => {
			e.preventDefault();

			/**
			 * Open menu on right click at mouse position. If its near the
			 * edge of the screen, open it on the left instead.
			 *
			 * If the user clicks a desktop icon, don't open the menu.
			 */
			if (
				(e.target as HTMLElement).className.includes(
					'desktop-icon'
				) ||
				(e.target as HTMLElement).tagName === 'P'
			) {
				console.log('Clicked desktop icon, not opening menu.');

				return;
			}

			// const { clientX, clientY } = e;
			// const { innerWidth, innerHeight } = window;
			// const x = clientX + 200 > innerWidth ? clientX - 200 : clientX;
			// const y = clientY + 200 > innerHeight ? clientY - 200 : clientY;
			// setMenuPosition({ x, y });

			setMenuPosition({
				x: e.clientX,
				y: e.clientY,
			});

			menuDisclosure.onOpen();
		},
		[menuDisclosure]
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
				<DesktopIcon app={EdgeApp} />
				<DesktopIcon app={VSCodeApp} gridRow={2} />
				<DesktopIcon app={SpotifyApp} gridRow={3} />
			</Grid>

			{/* <DesktopContextMenu
				position={menuPosition}
				{...menuDisclosure}
			/> */}

			<DesktopContextMenu
				position={menuPosition}
				{...menuDisclosure}
			/>
		</main>
	);
}
