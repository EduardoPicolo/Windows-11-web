'use client';

import { useBoolean, useTimeout } from '@chakra-ui/react';
import { SplashScreen } from '@repo/ui/components';
import dynamic from 'next/dynamic';

import { defaultTaskbarItems } from '../../constants/defaultTaskbarItems';


const WindowsGrid = dynamic(
	() =>
		import('./WindowsGrid').then(
			(mod) => mod.WindowsGrid
		),
	{
		loading: () => <SplashScreen position="absolute" zIndex={1} />,
	}
);

const Taskbar = dynamic(
	() => import('@/components/Taskbar').then((mod) => mod.Taskbar),
	{
		loading: () => <SplashScreen position="absolute" zIndex={1} />,
	}
);

export default function WindowsLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const [ready, { on }] = useBoolean(false);

	useTimeout(on, 2750);

	if (!ready) return <SplashScreen />;

	return (
		<WindowsGrid>
			{children}

			<Taskbar initialApps={defaultTaskbarItems} />
		</WindowsGrid>
	);
}
