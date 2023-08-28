import { WindowsGrid } from '@/app/(windows)/WindowsGrid';
import { Taskbar } from '@/components/Taskbar';
import { defaultTaskbarItems } from '@/constants/defaultTaskbarItems';

export default function WindowsLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<WindowsGrid>
			<main>{children}</main>

			<Taskbar apps={defaultTaskbarItems} />
		</WindowsGrid>
	);
}
