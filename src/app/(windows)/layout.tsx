import { WindowsGrid } from '@/app/(windows)/WindowsGrid';
import { Taskbar } from '@/components/Taskbar';
import { defaultTaskbarItems } from '@/constants/defaultTaskbarItems';

export default async function WindowsLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	// Fake await
	await new Promise((resolve) => {
		setTimeout(resolve, 2000);
	});

	return (
		<WindowsGrid>
			<main>{children}</main>

			<Taskbar initialApps={defaultTaskbarItems} />
		</WindowsGrid>
	);
}
