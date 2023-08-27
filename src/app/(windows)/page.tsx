'use client';

import { useEffect, useRef } from 'react';
import { Box, Grid } from '@chakra-ui/react';

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
			templateColumns="repeat(auto-fill, minmax(90px, 1fr))"
			gridTemplateRows="repeat(auto-fill, minmax(90px, 1fr))"
			justifyItems="center"
			alignItems="center"
			height="100%"
			padding={4}
		>
			<Box ref={inputEl} w="40px" h="40px" background="green.500">
				Hello
			</Box>

			<Box w="40px" h="40px" background="green.500" gridRow={2}>
				Hello
			</Box>
		</Grid>
	);
}
