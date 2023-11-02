'use client';

import { CacheProvider } from '@chakra-ui/next-js';
import type { Theme } from '@chakra-ui/react';
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import type { ReactNode } from 'react';

import { CustomToastContainer } from '@/components/ToastContainer';
import { SystemProvider } from '@/contexts/System/index.';
import { WindowsProvider } from '@/contexts/Windows';
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
					<SystemProvider>
						<WindowsProvider>{children}</WindowsProvider>
					</SystemProvider>
					<CustomToastContainer />
				</ChakraProvider>
			</CacheProvider>
			<ColorModeScript
				initialColorMode={(theme as Theme).config.initialColorMode}
			/>
		</>
	);
}
