'use client';

import { createContext, useContext, useMemo, useState } from 'react';
import { useBoolean } from '@chakra-ui/react';

import DefaultWallpaper from '@/public/wallpapers/1-win11.jpg';

import { systemContextDefaultValues } from './helpers';

const SystemContext = createContext<SystemContext>(
	systemContextDefaultValues
);

/**
 * `SystemProvider` manages system configuration (audio, brightness,
 * wallpaper)
 */
export function SystemProvider(props: { children: React.ReactNode }) {
	const { children } = props;

	const sound = useState(30);
	const soundMuted = useBoolean(false);
	const brightness = useState(0);

	const wallpaper = useState<Wallpaper>(DefaultWallpaper);
	const wallpaperFit = useState<WallpaperFitStyle>('cover');

	console.groupCollapsed('System Provider');
	console.log('sound', sound);
	console.log('brightness', brightness);
	console.groupEnd();

	const value: SystemContext = useMemo(
		() => ({
			sound,
			soundMuted,
			brightness,
			wallpaper,
			wallpaperFit,
		}),
		[brightness, sound, soundMuted, wallpaper, wallpaperFit]
	);

	return (
		<SystemContext.Provider value={value}>
			{children}
		</SystemContext.Provider>
	);
}

/** `useSystem` */
export function useSystem() {
	const context = useContext(SystemContext);

	// eslint-disable-next-line @typescript-eslint/no-unnecessary-condition -- context can be undefined if not used within a provider
	if (!context) {
		throw new Error(
			'useSystem must be used within a `SystemProvider`'
		);
	}

	return context;
}
