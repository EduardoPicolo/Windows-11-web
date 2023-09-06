import Image, { type StaticImageData } from 'next/image';
import { useLayoutEffect } from 'react';
import { Center, LinkBox, LinkOverlay, Text } from '@chakra-ui/react';

import GithubIcon from '@/public/icons/Github.svg';

/** Github cannot be iframe'd */
export function Github() {
	useLayoutEffect(() => {
		window.open(
			'https://github.com/EduardoPicolo/Windows-11-web',
			'_blank'
		);
	}, []);

	return (
		<Center flexDirection="column" h="full" p={4}>
			<LinkBox>
				<LinkOverlay
					href="https://github.com/EduardoPicolo/Windows-11-web"
					target="_blank"
				>
					<Image
						src={GithubIcon as StaticImageData}
						quality={100}
						alt="github"
					/>
					<Text textAlign="center">Go to Github Repository</Text>
				</LinkOverlay>
			</LinkBox>
		</Center>
	);
}
