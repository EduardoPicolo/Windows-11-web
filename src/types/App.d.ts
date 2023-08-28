interface App {
	shortName: string;
	fullName: string;
	processName: import('@/components/Apps/apps').Process;
	icon: React.ReactNode;
	Window: React.ComponentType | null;
}

interface ExecutableIconProps {
	app: App;
}
