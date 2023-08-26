import { WindowsGrid } from '@/app/(windows)/WindowsGrid';
import { Taskbar } from '@/components/Taskbar';
import { defaultApps } from '@/constants/defaultApps';

export default function WindowsLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<WindowsGrid>
			<main>{children}</main>
			<Taskbar apps={defaultApps} />
		</WindowsGrid>
	);
}
