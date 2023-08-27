'use client';

import Image, { type StaticImageData } from 'next/image';

import { AppIcon } from '@/components/AppIcon';
import { StartMenuShortcut } from '@/components/Apps/StartMenuShortcut';
import { ThemeImage } from '@/components/ThemeImage';
import ChatIcon from '@/public/icons/Chat.png';
import EdgeIcon from '@/public/icons/edge.svg';
import FileExplorerIcon from '@/public/icons/FileExplorer.png';
import SearchIconDark from '@/public/icons/Search_Dark.png';
import SearchIconLight from '@/public/icons/Search_Light.png';
import StoreIcon from '@/public/icons/Store.png';
import TaskViewerIconDark from '@/public/icons/TaskView_Dark.png';
import TaskViewerIconLight from '@/public/icons/TaskView_Light.png';

export const defaultApps = [
	<StartMenuShortcut key="start" />,
	<AppIcon
		name="Search"
		icon={
			<ThemeImage
				srcLight={SearchIconLight}
				srcDark={SearchIconDark}
				width={24}
				alt="search"
			/>
		}
		key="search"
		transform="scaleX(-1)"
	/>,
	<AppIcon
		name="Start"
		icon={
			<ThemeImage
				srcLight={TaskViewerIconLight}
				srcDark={TaskViewerIconDark}
				width={24}
				alt="tasks"
			/>
		}
		key="tasks"
	/>,
	<AppIcon
		name="Chat"
		icon={<Image src={ChatIcon} alt="chat" width={25} />}
		key="chat"
	/>,
	<AppIcon
		name="File Explorer"
		icon={
			<Image src={FileExplorerIcon} alt="file-explorer" width={24} />
		}
		key="file-explorer"
	/>,
	<AppIcon
		name="Edge"
		icon={
			<Image
				src={EdgeIcon as StaticImageData}
				alt="edge"
				width={28}
			/>
		}
		key="edge"
	/>,
	<AppIcon
		name="Store"
		icon={<Image src={StoreIcon} alt="store" width={26} />}
		key="store"
	/>,
];
