import { WindowsGrid } from '@/app/(windows)/WindowsGrid';
import { Taskbar } from '@/components/Taskbar';

export default function WindowsLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<WindowsGrid>
			<main>{children}</main>
			<Taskbar />
		</WindowsGrid>
	);
}
