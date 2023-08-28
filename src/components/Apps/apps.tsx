import Image, { StaticImageData } from 'next/image';
import { Box } from '@chakra-ui/react';

import { ThemeImage } from '@/components/ThemeImage';
import ChatIcon from '@/public/icons/Chat.png';
import EdgeIcon from '@/public/icons/edge.svg';
import FileExplorerIcon from '@/public/icons/FileExplorer.png';
import StoreIcon from '@/public/icons/Store.png';
import TasksIconDark from '@/public/icons/TaskView_Dark.png';
import TasksIconLight from '@/public/icons/TaskView_Light.png';

export function MockWindow() {
	return (
		<Box>
			<Image src={EdgeIcon as StaticImageData} alt="edge" />
		</Box>
	);
}

export const TasksApp: App = {
	shortName: 'Tasks',
	fullName: 'Tasks',
	processName: 'tasks',
	icon: (
		<ThemeImage
			srcLight={TasksIconLight}
			srcDark={TasksIconDark}
			alt="tasks"
		/>
	),
	window: MockWindow,
};

export const ChatApp: App = {
	shortName: 'Chat',
	fullName: 'Microsoft Teams',
	processName: 'chat',
	icon: <Image src={ChatIcon} alt="chat" />,
	window: MockWindow,
};

export const EdgeApp: App = {
	shortName: 'Edge',
	fullName: 'Microsoft Edge',
	processName: 'edge',
	icon: <Image src={EdgeIcon as StaticImageData} alt="edge" />,
	window: MockWindow,
};

export const FileExplorerApp: App = {
	shortName: 'File Explorer',
	fullName: 'File Explorer',
	processName: 'fileExplorer',
	icon: <Image src={FileExplorerIcon} alt="file-explorer" />,
	window: MockWindow,
};

export const StoreApp: App = {
	shortName: 'Store',
	fullName: 'Microsoft Store',
	processName: 'store',
	icon: <Image src={StoreIcon} alt="store" />,
	window: MockWindow,
};

export const apps = {
	tasks: TasksApp,
	chat: ChatApp,
	edge: EdgeApp,
	fileExplorer: FileExplorerApp,
	store: StoreApp,
};

export type Process = keyof typeof apps;
