'use client';

import {
	Box,
	Center,
	chakra,
	Heading,
	LightMode,
	Text,
} from '@chakra-ui/react';

export function BlueScreen() {
	return (
		<LightMode>
			<Center
				background="blue.600"
				flexDirection="column"
				h="100vh"
				w="100vw"
			>
				<Box maxWidth="110ch">
					<Heading fontSize="9xl" fontWeight="medium" mb={4}>
						<chakra.span>&#58;</chakra.span>
						<chakra.span>&#40;</chakra.span>
					</Heading>
					<Heading fontWeight="normal" size="lg">
						Your PC ran into a problem and needs to restart.
						We&apos;re just collecting some error info, and then
						we&apos;ll restart for you.
					</Heading>

					<Text fontSize="xs" mt={16}>
						If you&apos;d like to know more, you can search online
						later for this error:{' '}
						<Text as="span" fontWeight="medium">
							STACK_OVERFLOW
						</Text>
					</Text>
				</Box>
			</Center>
		</LightMode>
	);
}
