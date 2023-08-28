interface App {
	shortName: string;
	fullName: string;
	processName: import('@/components/Apps/apps').Process;
	icon: React.ReactNode;
	window: React.ComponentType;
}

interface ExecutableIconProps {
	app: App;
}
