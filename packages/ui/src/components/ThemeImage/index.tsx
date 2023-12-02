'use client';

import Image, { type ImageProps } from 'next/image';
import { useColorMode } from '@chakra-ui/react';

type Props = Omit<ImageProps, 'src' | 'priority' | 'loading'> & {
	srcLight: ImageProps['src'];
	srcDark: ImageProps['src'];
};

/**
 * A component that renders an image based on the current color mode.
 *
 * @see https://nextjs.org/docs/app/api-reference/components/image#theme-detection
 */
export function ThemeImage(props: Props) {
	const { srcLight, srcDark, ...rest } = props;

	const { colorMode } = useColorMode();

	return (
		<>
			<Image
				{...rest}
				src={srcLight}
				style={{
					display: colorMode === 'light' ? 'unset' : 'none',
				}}
			/>
			<Image
				{...rest}
				src={srcDark}
				style={{
					display: colorMode === 'dark' ? 'unset' : 'none',
				}}
			/>
		</>
	);
}
