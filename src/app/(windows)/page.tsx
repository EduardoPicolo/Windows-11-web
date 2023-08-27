'use client';

import Image, { type StaticImageData } from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import { Grid, Portal } from '@chakra-ui/react';

import { apps } from '@/components/Apps/apps';
import { DesktopIcon } from '@/components/DesktopIcon';
import { useDragSelect } from '@/contexts/Selection';
import BinIcon from '@/public/icons/icons8-bin-windows.svg';

const { edge } = apps;

export default function Home() {
	const [windows, setWindows] = useState<React.ComponentType[]>([]);

	const ds = useDragSelect();
	const inputEl = useRef(null);

	// adding a selectable element
	useEffect(() => {
		const element = inputEl.current as unknown as HTMLElement;
		if (!element || !ds) return;
		console.log('adding element');
		const aaa = ds.addSelectables(element);
		console.log(aaa);
	}, [ds, inputEl]);

	// subscribing to a callback
	useEffect(() => {
		const id = ds?.subscribe('callback', (event: unknown) => {
			// do something
			console.log(event);
		});

		return () => {
			ds?.unsubscribe('callback', undefined, id);
		};
	}, [ds]);

	return (
		<>
			<Grid
				templateColumns="repeat(auto-fill, minmax(75px, 1fr))"
				gridTemplateRows="max-content"
				gridAutoFlow="dense"
				gap={8}
				justifyItems="center"
				height="100%"
				padding={4}
				textAlign="center"
			>
				<DesktopIcon
					ref={inputEl}
					name="Recycle Bin"
					icon={<Image src={BinIcon as StaticImageData} alt="bin" />}
					onClick={() => console.log('clicked bin')}
				/>

				<DesktopIcon
					name={edge.fullName}
					icon={edge.icon}
					// onClick={() => console.log('clicked edge')}
					onClick={() => setWindows([...windows, edge.window])}
				/>
			</Grid>
			<Portal>
				{windows.map((Window, i) => (
					<Window key={i} />
				))}
			</Portal>
		</>
	);
}
