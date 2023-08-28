'use client';

import {
	ChatApp,
	EdgeApp,
	FileExplorerApp,
	StoreApp,
	TasksApp,
} from '@/components/Apps/apps';

// import { Process } from '@/components/Apps/apps';

// export const defaultTaskbarItems: Process[] = [
// 	'chat',
// 	'edge',
// 	'fileExplorer',
// 	'store',
// ];

export const defaultTaskbarItems: App[] = [
	TasksApp,
	ChatApp,
	FileExplorerApp,
	EdgeApp,
	StoreApp,
];
