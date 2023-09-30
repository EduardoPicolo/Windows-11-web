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
	title: 'Windows Web 11',
	description: `Discover the elegance of Windows 11 in your browser! Powered by Next.js and Chakra UI, this open source project replicates the stylish design and smooth user interface of the real Windows 11. Explore familiar features and play around with the settings - all in your browser.`,
	applicationName: 'Windows Web 11',
	generator: 'Next.js',
	creator: 'https://github.com/EduardoPicolo/Windows-11-web',
	publisher: 'Vercel',
	keywords: [
		'nextjs',
		'react',
		'typescript',
		'chakra-ui',
		'Windows',
		'Windows 11',
		'Windows Web',
		'web development',
		'UI design',
		'clone',
		'Microsoft',
	],
	robots: 'index, follow',
	openGraph: {
		type: 'website',
		url: 'https://windows-web.vercel.app',
		title: 'Windows Web 11',
		siteName: 'Windows Web 11',
		description: `Discover the elegance of Windows 11 in your browser! Powered by Next.js and Chakra UI, this open source project replicates the stylish design and smooth user interface of the real Windows 11. Explore familiar features and play around with the settings - all in your browser.`,
	},
	verification: {
		google: process.env.GOOGLE_VERIFICATION,
	},
	alternates: {
		canonical: 'https://windows-web.vercel.app',
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
				{/* eslint-disable-next-line @next/next/no-sync-scripts -- must not defer/async */}
				<script
					data-project-id="9mYUaURtWAbjQsLEkcgfdMrwoQ77zxbG0arEEQub"
					src="https://snippet.meticulous.ai/v1/meticulous.js"
				/>
				<Providers>{children}</Providers>
				<Analytics />
			</body>
		</html>
	);
}
