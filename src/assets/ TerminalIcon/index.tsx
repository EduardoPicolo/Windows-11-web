import React from 'react';
import { Icon, type IconProps } from '@chakra-ui/react';

type TerminalIconProps = IconProps;

export function TerminalIcon(props: TerminalIconProps) {
	return (
		<Icon
			viewBox="0 0 256 256"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<g fill="#a2a2a2">
				<path d="M0 0h.3L0 .3V0zM35.7 174.7c9.4-9.3 18.6-19 28.3-28 5.4 4.8 9 11.2 14.7 15.6 1.7 1.6 4.1.8 6.2.9C74.2 173.8 63.7 184.5 53 195c-2 2.4-5.8 3-8.4 1.3-3-2.2-5.4-5.2-8.2-7.7-2-2-4.8-4.3-4.4-7.6-.3-2.8 2-4.6 3.7-6.3z" />
			</g>
			<path
				fill="#ccc"
				d="M0 40.3C1.3 36 5 31.8 9.9 32h78.2v32H0V40.3z"
			/>
			<path fill="#999" d="M88 32h84v32H88V32z" />
			<path
				fill="#666"
				d="M172 32h74c4.7-.2 8 3.6 10 7.3v24.6h-84V32z"
			/>
			<path
				fill="#454545"
				d="M0 64a51685.4 51685.4 0 00172 0c28 0 56-.2 84-.1v152.8c-1.9 2.5-3.8 5.2-6.7 6.6-3.7.8-7.5.3-11.3.4l-220 .2c-3.8 0-7.7.4-11.4-.6-3-1.2-4.8-4-6.6-6.6V64m38.4 33.4c-2.5 2.9-6.8 5.3-6.4 9.6-.2 2.2 1.3 3.9 2.7 5.3l31.6 31.5-2.3 3c-9.7 9-18.9 18.6-28.3 27.9-1.7 1.7-4 3.6-3.7 6.3-.4 3.3 2.3 5.5 4.4 7.6 2.8 2.5 5.1 5.5 8.2 7.7 2.6 1.8 6.4 1 8.4-1.3 10.7-10.5 21.2-21.2 31.9-31.8l3-3.1c3.7-3.4 7.1-7 10.7-10.5 1.5-1.5 3.2-3.3 3-5.6.2-2.6-1.8-4.4-3.5-6.1a6973 6973 0 01-43-43c-2-2-4-4.6-7-4.4-4.4.1-6.7 4.4-9.7 7m84.8 78.7c-1.8.9-3.4 2.7-3.2 4.8 0 5-.1 10 .1 15 .3 2.7 3.3 4.3 5.9 4 24.3 0 48.7 0 73-.2 2.7.2 5-2.1 4.8-4.8 0-5.2.4-10.5-.1-15.8-1-2.8-4.1-3.4-6.7-3.1-24.6.1-49.2-.4-73.8.1z"
			/>
			<g fill="#dfdfdf">
				<path d="M38.4 97.4c3-2.5 5.3-6.8 9.6-6.9 3.1-.2 5.1 2.5 7.1 4.4a6973 6973 0 0043 43c1.7 1.7 3.7 3.5 3.6 6.1 0 2.3-1.6 4-3.1 5.6L88 160c-2.5-.3-5.4.1-7.2-2l-14.5-14.3-31.6-31.5c-1.4-1.4-2.9-3.1-2.8-5.3-.3-4.3 4-6.7 6.5-9.6zM123.2 176.2c24.6-.5 49.2 0 73.8-.1 2.6-.3 5.8.3 6.7 3.1.5 5.3.1 10.6.1 15.8.3 2.7-2.1 5-4.8 4.8l-73 .2c-2.6.3-5.6-1.3-5.9-4-.2-5 0-10 0-15-.3-2.1 1.3-4 3-4.8z" />
			</g>
			<path
				fill="#7f7f7f"
				d="M66.3 143.8l14.5 14.3c1.8 2.1 4.7 1.7 7.2 2l-3.1 3.1c-2-.1-4.5.7-6.2-.9-5.6-4.4-9.3-10.8-14.7-15.5l2.3-3z"
			/>
		</Icon>
	);
}
