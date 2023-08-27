import Image, { StaticImageData } from 'next/image';

import { Window } from '@/components/Window';
import ChatIcon from '@/public/icons/Chat.png';
import EdgeIcon from '@/public/icons/edge.svg';
import FileExplorerIcon from '@/public/icons/FileExplorer.png';
import StoreIcon from '@/public/icons/Store.png';

function MockWindow() {
	return (
		<Window
			title="Edge"
			icon={<Image src={EdgeIcon as StaticImageData} alt="edge" />}
		>
			<Image src={EdgeIcon as StaticImageData} alt="edge" />
		</Window>
	);
}

export const apps = {
	start: {
		shortName: 'Start',
		fullName: 'Start',
		icon: <Image src={ChatIcon} alt="chat" />,
		window: MockWindow,
	},
	chat: {
		shortName: 'Chat',
		fullName: 'Microsoft Teams',
		icon: <Image src={ChatIcon} alt="chat" />,
		window: MockWindow,
	} as App,
	edge: {
		shortName: 'Edge',
		fullName: 'Microsoft Edge',
		icon: <Image src={EdgeIcon as StaticImageData} alt="edge" />,
		window: MockWindow,
	} as App,
	fileExplorer: {
		shortName: 'File Explorer',
		fullName: 'File Explorer',
		icon: <Image src={FileExplorerIcon} alt="file-explorer" />,
		window: MockWindow,
	} as App,
	store: {
		shortName: 'Store',
		fullName: 'Microsoft Store',
		icon: <Image src={StoreIcon} alt="store" />,
		window: MockWindow,
	} as App,
};

export type Executable = keyof typeof apps;
