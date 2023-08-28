'use client';

import { ReactNode } from 'react';
import { CacheProvider } from '@chakra-ui/next-js';
import {
	ChakraProvider,
	ColorModeScript,
	Theme,
} from '@chakra-ui/react';

import { CustomToastContainer } from '@/components/ToastContainer';
import { DragSelectProvider } from '@/contexts/Selection';
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
						<WindowsProvider>
							<DragSelectProvider>{children}</DragSelectProvider>
						</WindowsProvider>
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
