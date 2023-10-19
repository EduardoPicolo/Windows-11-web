'use client';

import dynamic from 'next/dynamic';
import { useBoolean, useTimeout } from '@chakra-ui/react';

// import { WindowsGrid } from '@/app/(windows)/WindowsGrid';
import { SplashScreen } from '@/components/SplashScreen';
// import { Taskbar } from '@/components/Taskbar';
import { defaultTaskbarItems } from '@/constants/defaultTaskbarItems';

const WindowsGrid = dynamic(
	() =>
		import('@/app/(windows)/WindowsGrid').then(
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
