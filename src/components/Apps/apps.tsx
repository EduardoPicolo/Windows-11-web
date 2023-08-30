import Image, { StaticImageData } from 'next/image';

import { VSCode } from '@/components/Apps/VSCode';
import { ThemeImage } from '@/components/ThemeImage';
import CalculatorIcon from '@/public/icons/Calculator.png';
import ChatIcon from '@/public/icons/Chat.png';
import EdgeIcon from '@/public/icons/Edge.png';
import FileExplorerIcon from '@/public/icons/FileExplorer.png';
import GithubIcon from '@/public/icons/Github.svg';
import InstagramIcon from '@/public/icons/Instagram.svg';
import MailIcon from '@/public/icons/Mail.png';
import OfficeIcon from '@/public/icons/Office365.png';
import PhotosIcon from '@/public/icons/Photos.png';
import SettingsIcon from '@/public/icons/Settings.png';
import SolitaireIcon from '@/public/icons/Solitaire.svg';
import SpotifyIcon from '@/public/icons/Spotify.svg';
import StoreDarkIcon from '@/public/icons/Store_Dark.png';
import StoreIconLight from '@/public/icons/Store_Light.png';
import TasksIconDark from '@/public/icons/TaskView_Dark.png';
import TasksIconLight from '@/public/icons/TaskView_Light.png';
import VSCodeIcon from '@/public/icons/VSCode.svg';
import WhiteboardIcon from '@/public/icons/Whiteboard.svg';
import WordIcon from '@/public/icons/Word.svg';
import XboxIcon from '@/public/icons/Xbox.svg';

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

export const XboxApp: App = {
	shortName: 'Xbox',
	fullName: 'Xbox',
	processName: 'xbox',
	icon: <Image src={XboxIcon as StaticImageData} alt="xbox" />,
	Window: null,
};

export const SolitaireApp: App = {
	shortName: 'Solitaire',
	fullName: 'Solitaire',
	processName: 'solitaire',
	icon: (
		<Image src={SolitaireIcon as StaticImageData} alt="solitaire" />
	),
	Window: null,
};

export const SpotifyApp: App = {
	shortName: 'Spotify',
	fullName: 'Spotify',
	processName: 'spotify',
	icon: <Image src={SpotifyIcon as StaticImageData} alt="spotify" />,
	Window: null,
};

export const InstagramApp: App = {
	shortName: 'Instagram',
	fullName: 'Instagram',
	processName: 'instagram',
	icon: (
		<Image src={InstagramIcon as StaticImageData} alt="instagram" />
	),
	Window: null,
};

export const CalculatorApp: App = {
	shortName: 'Calculator',
	fullName: 'Calculator',
	processName: 'calculator',
	icon: <Image src={CalculatorIcon} alt="calculator" />,
	Window: null,
};

export const VSCodeApp: App = {
	shortName: 'VSCode',
	fullName: 'Visual Studio Code',
	processName: 'vscode',
	icon: <Image src={VSCodeIcon as StaticImageData} alt="vscode" />,
	Window: VSCode,
};

export const WhiteboardApp: App = {
	shortName: 'Whiteboard',
	fullName: 'Whiteboard',
	processName: 'whiteboard',
	icon: (
		<Image src={WhiteboardIcon as StaticImageData} alt="whiteboard" />
	),
	Window: null,
};

export const WordApp: App = {
	shortName: 'Word',
	fullName: 'Word',
	processName: 'word',
	icon: <Image src={WordIcon as StaticImageData} alt="word" />,
	Window: null,
};

export const GithubApp: App = {
	shortName: 'Github',
	fullName: 'Github',
	processName: 'github',
	icon: <Image src={GithubIcon as StaticImageData} alt="github" />,
	Window: null,
};

export const apps = {
	github: GithubApp,
	edge: EdgeApp,
	office: OfficeApp,
	mail: MailApp,
	store: StoreApp,
	photos: PhotosApp,
	vscode: VSCodeApp,
	settings: SettingsApp,
	xbox: XboxApp,
	solitaire: SolitaireApp,
	spotify: SpotifyApp,
	instagram: InstagramApp,
	fileExplorer: FileExplorerApp,
	chat: ChatApp,
	whiteboard: WhiteboardApp,
	word: WordApp,
	tasks: TasksApp,
	calculator: CalculatorApp,
};

export type Process = keyof typeof apps;
