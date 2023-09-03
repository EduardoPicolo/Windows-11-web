import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import localFont from 'next/font/local';
import { Analytics } from '@vercel/analytics/react';

import { Providers } from './providers';

const segoe = localFont({
	src: [
		// Text
		{
			path: './fonts/SegoeUI-VF/Segoe-UI-Variable-Static-Text-Light.ttf',
			style: 'normal',
			weight: '100',
		},
		{
			path: './fonts/SegoeUI-VF/Segoe-UI-Variable-Static-Text-Semilight.ttf',
			style: 'normal',
			weight: '300',
		},
		{
			path: './fonts/SegoeUI-VF/SegoeUI-VF.ttf',
			style: 'normal',
			weight: '400 500',
		},
		{
			path: './fonts/SegoeUI-VF/Segoe-UI-Variable-Static-Text-Semibold.ttf',
			style: 'normal',
			weight: '600',
		},
		{
			path: './fonts/SegoeUI-VF/Segoe-UI-Variable-Static-Text-Bold.ttf',
			style: 'normal',
			weight: '700 900',
		},
	],
	display: 'swap',
	variable: '--body-font',
});

// const opensans = Open_Sans({
// 	weight: ['300', '400', '500', '600', '700', '800'],
// 	subsets: ['latin'],
// 	display: 'swap',
// 	variable: '--body-font',
// });

const poppins = Poppins({
	weight: [
		'100',
		'200',
		'300',
		'400',
		'500',
		'600',
		'700',
		'800',
		'900',
	],
	subsets: ['latin'],
	display: 'swap',
	variable: '--heading-font',
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
		<html
			lang="en"
			className={`${segoe.variable} ${poppins.variable}`}
		>
			<body>
				<Providers>{children}</Providers>
				<Analytics />
			</body>
		</html>
	);
}
