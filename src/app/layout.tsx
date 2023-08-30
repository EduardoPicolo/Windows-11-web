import { Open_Sans, Poppins } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';

import { Providers } from './providers';

const opensans = Open_Sans({
	weight: ['300', '400', '500', '600', '700', '800'],
	subsets: ['latin'],
	display: 'swap',
	variable: '--body-font',
});

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

export const metadata = {
	title: 'Windows 11',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html
			lang="en"
			className={`${opensans.variable} ${poppins.variable}`}
		>
			<body>
				<Providers>{children}</Providers>
				<Analytics />
			</body>
		</html>
	);
}
