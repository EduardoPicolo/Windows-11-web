import React from 'react';
import { chakra, Icon, type IconProps } from '@chakra-ui/react';

interface SpeakerIconProps extends IconProps {
	volumeLevel: number;
}

export function SpeakerIcon(props: SpeakerIconProps) {
	const { volumeLevel = 0, ...rest } = props;

	return (
		<Icon
			width="512px"
			height="512px"
			viewBox="0 0 512 512"
			xmlns="http://www.w3.org/2000/svg"
			{...rest}
		>
			<chakra.path
				d="M 114 192 L 44 192 C 39.582 192 36 195.582 36 200 L 36 312 C 36 316.418 39.582 320 44 320 L 113.65 320 C 117.338 319.971 120.922 321.222 123.79 323.54 L 215.26 398.43 C 220.221 402.079 227.272 398.989 227.951 392.868 C 227.983 392.58 227.999 392.29 228 392 L 228 120 C 227.989 113.842 221.315 110.005 215.987 113.094 C 215.736 113.239 215.494 113.398 215.26 113.57 L 123.79 188.46 C 121.054 190.771 117.581 192.027 114 192 Z"
				fill="none"
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="42px"
				opacity={volumeLevel === 0 ? 0.33 : 1}
			/>
			<chakra.path
				d="M 303 320 C 312.74 300.62 319 279.16 319 256 C 319 232.52 313 211.58 303 192"
				fill="none"
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="42px"
				opacity={volumeLevel >= 20 ? 1 : 0.33}
			/>
			<chakra.path
				d="M 366.5 368 C 385.98 334.08 398.5 303.94 398.5 256 C 398.5 208.06 386.5 178.26 366.5 144"
				fill="none"
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="42px"
				opacity={volumeLevel >= 40 ? 1 : 0.33}
			/>
			<chakra.path
				d="M 430 416 C 460 370 478 324.57 478 256 C 478 187.43 460 143 430 96"
				fill="none"
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="42px"
				opacity={volumeLevel >= 60 ? 1 : 0.33}
			/>
		</Icon>
	);
}
