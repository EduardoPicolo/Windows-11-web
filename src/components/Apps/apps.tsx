import Image from 'next/image';
import { Box } from '@chakra-ui/react';

import { ThemeImage } from '@/components/ThemeImage';
import ChatIcon from '@/public/icons/Chat.png';
import EdgeIcon from '@/public/icons/Edge.png';
import FileExplorerIcon from '@/public/icons/FileExplorer.png';
import StoreDarkIcon from '@/public/icons/Store_Dark.png';
import StoreIconLight from '@/public/icons/Store_Light.png';
import TasksIconDark from '@/public/icons/TaskView_Dark.png';
import TasksIconLight from '@/public/icons/TaskView_Light.png';

export function MockWindow() {
	return (
		<Box>
			<Image src={EdgeIcon} alt="edge" />
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
	Window: MockWindow,
};

export const ChatApp: App = {
	shortName: 'Chat',
	fullName: 'Microsoft Teams',
	processName: 'chat',
	icon: <Image src={ChatIcon} alt="chat" />,
	Window: MockWindow,
};

export const EdgeApp: App = {
	shortName: 'Edge',
	fullName: 'Microsoft Edge',
	processName: 'edge',
	icon: (
		<Image
			src={EdgeIcon}
			alt="edge"
			style={{
				minWidth: '28px',
			}}
		/>
	),
	Window: MockWindow,
};

export const FileExplorerApp: App = {
	shortName: 'File Explorer',
	fullName: 'File Explorer',
	processName: 'fileExplorer',
	icon: <Image src={FileExplorerIcon} alt="file-explorer" />,
	Window: null,
};

export const StoreApp: App = {
	shortName: 'Store',
	fullName: 'Microsoft Store',
	processName: 'store',
	icon: (
		<ThemeImage
			srcLight={StoreIconLight}
			srcDark={StoreDarkIcon}
			alt="store"
		/>
	),
	Window: MockWindow,
};

export const apps = {
	tasks: TasksApp,
	chat: ChatApp,
	edge: EdgeApp,
	fileExplorer: FileExplorerApp,
	store: StoreApp,
};

export type Process = keyof typeof apps;
