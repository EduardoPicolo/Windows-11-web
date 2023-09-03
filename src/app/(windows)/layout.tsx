'use client';

import { useBoolean, useTimeout } from '@chakra-ui/react';

import { WindowsGrid } from '@/app/(windows)/WindowsGrid';
import { SplashScreen } from '@/components/SplashScreen';
import { Taskbar } from '@/components/Taskbar';
import { defaultTaskbarItems } from '@/constants/defaultTaskbarItems';

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
