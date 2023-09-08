import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { Analytics } from '@vercel/analytics/react';

import { Providers } from './providers';

const segoe = localFont({
	src: [
		{
			path: './fonts/SegoeUI-VF/SegoeUI-VF.woff2',
			style: 'normal',
			weight: '100 900',
		},
		{
			path: './fonts/SegoeUI-VF/SegoeUI-VF.woff2',
			style: 'italic',
			weight: '100 900',
		},
	],
	display: 'swap',
	variable: '--body-font',
});

export const metadata: Metadata = {
	metadataBase: new URL('https://windows-web.vercel.app'),
	title: 'Windows 11 Web',
	description: 'Windows 11 clone made with Next.js and Chakra UI',
	applicationName: 'Windows 11 Web',
	generator: 'Next.js',
	keywords: ['nextjs', 'react', 'typescript', 'chakra-ui', 'windows'],
	openGraph: {
		type: 'website',
		locale: 'en_US',
		url: 'https://windows-web.vercel.app/',
		siteName: 'Windows 11 Web',
		title: 'Windows 11 Web',
		description: 'Windows 11 clone made with Next.js and Chakra UI',
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className={`${segoe.variable}`}>
			<body>
				<Providers>{children}</Providers>
				<Analytics />
			</body>
		</html>
	);
}
