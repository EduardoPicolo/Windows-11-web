import Image from 'next/image';

import { ThemeImage } from '@/components/ThemeImage';
import ChatIcon from '@/public/icons/Chat.png';
import EdgeIcon from '@/public/icons/Edge.png';
import FileExplorerIcon from '@/public/icons/FileExplorer.png';
import MailIcon from '@/public/icons/Mail.png';
import OfficeIcon from '@/public/icons/Office365.png';
import PhotosIcon from '@/public/icons/Photos.png';
import SettingsIcon from '@/public/icons/Settings.png';
import StoreDarkIcon from '@/public/icons/Store_Dark.png';
import StoreIconLight from '@/public/icons/Store_Light.png';
import TasksIconDark from '@/public/icons/TaskView_Dark.png';
import TasksIconLight from '@/public/icons/TaskView_Light.png';

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
	Window: null,
};

export const ChatApp: App = {
	shortName: 'Chat',
	fullName: 'Microsoft Teams',
	processName: 'chat',
	icon: <Image src={ChatIcon} alt="chat" />,
	Window: null,
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
	Window: null,
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
	Window: null,
};
export const OfficeApp: App = {
	shortName: 'Office',
	fullName: 'Microsoft 365 (Office)',
	processName: 'office',
	icon: <Image src={OfficeIcon} alt="office" />,
	Window: null,
};

export const MailApp: App = {
	shortName: 'Mail',
	fullName: 'Mail',
	processName: 'mail',
	icon: <Image src={MailIcon} alt="mail" />,
	Window: null,
};

export const PhotosApp: App = {
	shortName: 'Photos',
	fullName: 'Photos',
	processName: 'photos',
	icon: <Image src={PhotosIcon} alt="photos" />,
	Window: null,
};

export const SettingsApp: App = {
	shortName: 'Settings',
	fullName: 'Settings',
	processName: 'settings',
	icon: <Image src={SettingsIcon} alt="settings" />,
	Window: null,
};

export const apps = {
	edge: EdgeApp,
	office: OfficeApp,
	mail: MailApp,
	store: StoreApp,
	photos: PhotosApp,
	settings: SettingsApp,
	chat: ChatApp,
	fileExplorer: FileExplorerApp,
	tasks: TasksApp,
};

export type Process = keyof typeof apps;
