import {
	IconButtonProps,
	Portal,
	useDisclosure,
} from '@chakra-ui/react';

import { AppIcon } from '@/components/AppIcon';
import { StartMenu } from '@/components/StartMenu';
import { ThemeImage } from '@/components/ThemeImage';
import StartIconDark from '@/public/icons/Start_Dark.png';
import StartIconLight from '@/public/icons/Start_Light.png';

type StartMenuShortcutProps = Partial<IconButtonProps>;

export function StartMenuShortcut(props: StartMenuShortcutProps) {
	const { onToggle, isOpen, onOpen, onClose } = useDisclosure();

	return (
		<>
			<AppIcon
				name="Start"
				icon={
					<ThemeImage
						srcLight={StartIconLight}
						srcDark={StartIconDark}
						width={26}
						alt="search"
					/>
				}
				onClick={onOpen}
				{...props}
			/>

			<Portal>
				<StartMenu isOpen={isOpen} onClose={onClose} />
			</Portal>

			{/* <Portal>
				<SlideFade
					unmountOnExit
					in={isOpen}
					offsetY="100px"
					style={{
						position: 'absolute',
						bottom: 'calc(56px + 1rem)',
						left: '10%',
					}}
				>
					<Card
					// position="absolute"
					// height="500px"
					// bottom="calc(56px + 1rem)"
					>
						<CardHeader>
							<Heading>Hello</Heading>
						</CardHeader>
					</Card>
				</SlideFade>
			</Portal> */}
		</>
	);
}
