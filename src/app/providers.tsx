'use client';

import { ReactNode } from 'react';
import { CacheProvider } from '@chakra-ui/next-js';
import {
	ChakraProvider,
	ColorModeScript,
	Theme,
} from '@chakra-ui/react';

import { CustomToastContainer } from '@/components/ToastContainer';
import { theme } from '@/theme';

import 'react-toastify/dist/ReactToastify.min.css';

interface ProvidersProps {
	children: ReactNode;
}

export function Providers({ children }: ProvidersProps) {
	return (
		<>
			<CacheProvider>
				<ChakraProvider theme={theme}>
					{children}
					<CustomToastContainer />
				</ChakraProvider>
			</CacheProvider>
			<ColorModeScript
				initialColorMode={(theme as Theme).config.initialColorMode}
			/>
		</>
	);
}
