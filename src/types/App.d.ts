interface ExecutableIconProps {
	name: string;
	icon: React.ReactNode;
	onClick: React.MouseEventHandler<HTMLElement> | undefined;
}

interface App {
	shortName: string;
	fullName: string;
	icon: React.ReactNode;
	window: React.ComponentType;
}
