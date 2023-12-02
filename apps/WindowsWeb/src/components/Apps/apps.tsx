import { ThemeImage } from '@repo/ui/components'
import Image from 'next/image';

import { Edge } from '@/components/Apps/Edge';
import { Github } from '@/components/Apps/Github';
import { Settings } from '@/components/Apps/Settings';
import { Spotify } from '@/components/Apps/Spotify';
import { VSCode } from '@/components/Apps/VSCode';
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
			alt="tasks"
			srcDark={TasksIconDark}
			srcLight={TasksIconLight}
		/>
	),
	Window: null,
};

export const ChatApp: App = {
	shortName: 'Chat',
	fullName: 'Microsoft Teams',
	processName: 'chat',
	icon: <Image alt="chat" src={ChatIcon} />,
	Window: null,
};

export const EdgeApp: App = {
	shortName: 'Edge',
	fullName: 'Microsoft Edge',
	processName: 'edge',
	icon: (
		<Image
			alt="edge"
			quality={100}
			src={EdgeIcon}
			style={{
				// eslint-disable-next-line no-inline-styles/no-inline-styles -- Icon is too small in some cases
				minWidth: '28px',
			}}
		/>
	),
	Window: Edge,
	initialSize: {
		width: 1024,
		height: 768,
	},
};

export const FileExplorerApp: App = {
	shortName: 'File Explorer',
	fullName: 'File Explorer',
	processName: 'fileExplorer',
	icon: <Image alt="file-explorer" src={FileExplorerIcon} />,
	Window: null,
};

export const StoreApp: App = {
	shortName: 'Store',
	fullName: 'Microsoft Store',
	processName: 'store',
	icon: (
		<ThemeImage
			alt="store"
			srcDark={StoreDarkIcon}
			srcLight={StoreIconLight}
		/>
	),
	Window: null,
};
export const OfficeApp: App = {
	shortName: 'Office',
	fullName: 'Microsoft 365 (Office)',
	processName: 'office',
	icon: <Image alt="office" src={OfficeIcon} />,
	Window: null,
};

export const MailApp: App = {
	shortName: 'Mail',
	fullName: 'Mail',
	processName: 'mail',
	icon: <Image alt="mail" src={MailIcon} />,
	Window: null,
};

export const PhotosApp: App = {
	shortName: 'Photos',
	fullName: 'Photos',
	processName: 'photos',
	icon: <Image alt="photos" src={PhotosIcon} />,
	Window: null,
};

export const SettingsApp: App = {
	shortName: 'Settings',
	fullName: 'Settings',
	processName: 'settings',
	icon: (
		<Image
			alt="settings"
			src={SettingsIcon}
			style={{
				// eslint-disable-next-line no-inline-styles/no-inline-styles -- Icon is too small in some cases
				minWidth: '28px',
			}}
		/>
	),
	Window: Settings,
	initialSize: {
		width: 1048,
		height: 863,
	},
};

export const XboxApp: App = {
	shortName: 'Xbox',
	fullName: 'Xbox',
	processName: 'xbox',
	icon: <Image alt="xbox" src={XboxIcon } />,
	Window: null,
};

export const SolitaireApp: App = {
	shortName: 'Solitaire',
	fullName: 'Solitaire',
	processName: 'solitaire',
	icon: (
		<Image alt="solitaire" src={SolitaireIcon } />
	),
	Window: null,
};

export const SpotifyApp: App = {
	shortName: 'Spotify',
	fullName: 'Spotify',
	processName: 'spotify',
	icon: (
		<Image
			alt="spotify"
			quality={100}
			src={SpotifyIcon }
		/>
	),
	Window: Spotify,
};

export const InstagramApp: App = {
	shortName: 'Instagram',
	fullName: 'Instagram',
	processName: 'instagram',
	icon: (
		<Image alt="instagram" src={InstagramIcon } />
	),
	Window: null,
};

export const CalculatorApp: App = {
	shortName: 'Calculator',
	fullName: 'Calculator',
	processName: 'calculator',
	icon: <Image alt="calculator" src={CalculatorIcon} />,
	Window: null,
};

export const VSCodeApp: App = {
	shortName: 'VSCode',
	fullName: 'Visual Studio Code',
	processName: 'vscode',
	icon: (
		<Image
			alt="vscode"
			quality={100}
			src={VSCodeIcon }
		/>
	),
	Window: VSCode,
	initialSize: {
		width: 1024,
		height: 768,
	},
};

export const WhiteboardApp: App = {
	shortName: 'Whiteboard',
	fullName: 'Whiteboard',
	processName: 'whiteboard',
	icon: (
		<Image alt="whiteboard" src={WhiteboardIcon } />
	),
	Window: null,
};

export const WordApp: App = {
	shortName: 'Word',
	fullName: 'Word',
	processName: 'word',
	icon: <Image alt="word" src={WordIcon } />,
	Window: null,
};

export const GithubApp: App = {
	shortName: 'Github',
	fullName: 'Github',
	processName: 'github',
	icon: (
		<Image
			alt="github"
			quality={100}
			src={GithubIcon }
		/>
	),
	Window: Github,
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
