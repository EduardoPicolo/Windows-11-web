import Image, { StaticImageData } from 'next/image';

import { ThemeImage } from '@/components/ThemeImage';
import ChatIcon from '@/public/icons/Chat.png';
import EdgeIcon from '@/public/icons/edge.svg';
import FileExplorerIcon from '@/public/icons/FileExplorer.png';
import SearchIconDark from '@/public/icons/Search_Dark.png';
import SearchIconLight from '@/public/icons/Search_Light.png';
import StoreIcon from '@/public/icons/store.png';
import TaskViewerIconDark from '@/public/icons/TaskView_Dark.png';
import TaskViewerIconLight from '@/public/icons/TaskView_Light.png';

export const defaultApps: App[] = [
	{
		name: 'Search',
		icon: (
			<ThemeImage
				srcLight={SearchIconLight}
				srcDark={SearchIconDark}
				width={28}
				alt="search"
			/>
		),
	},
	{
		name: 'Tasks',
		icon: (
			<ThemeImage
				srcLight={TaskViewerIconLight}
				srcDark={TaskViewerIconDark}
				width={28}
				alt="tasks"
			/>
		),
	},
	{
		name: 'Chat',
		icon: <Image src={ChatIcon} alt="chat" width={28} />,
	},
	{
		name: 'File Explorer',
		icon: (
			<Image src={FileExplorerIcon} alt="file-explorer" width={28} />
		),
	},
	{
		name: 'Edge',
		icon: (
			<Image
				src={EdgeIcon as StaticImageData}
				alt="edge"
				width={28}
			/>
		),
	},
	{
		name: 'Store',
		icon: <Image src={StoreIcon} alt="store" width={28} />,
	},
];
