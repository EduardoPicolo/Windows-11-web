'use client';

import React, { useEffect, useRef } from 'react';
import { Grid } from '@chakra-ui/react';

import { EdgeApp } from '@/components/Apps/apps';
import { DesktopIcon } from '@/components/DesktopIcon';
import { useDragSelect } from '@/contexts/Selection';

export default function Home() {
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
			<DesktopIcon ref={inputEl} app={EdgeApp} />

			<DesktopIcon app={EdgeApp} />
		</Grid>
	);
}
