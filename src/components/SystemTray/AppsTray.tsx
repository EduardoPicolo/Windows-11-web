import {
	ButtonGroup,
	Icon,
	IconButton,
	Popover,
	PopoverBody,
	PopoverContent,
	PopoverTrigger,
	Portal,
} from '@chakra-ui/react';
import { BsNvidia } from 'react-icons/bs';
import { FaDiscord, FaSpotify, FaSteam } from 'react-icons/fa';
import { MdKeyboardArrowUp } from 'react-icons/md';

export function AppsTray() {
	return (
		<Popover placement="top" offset={[0, 16]}>
			{({ isOpen }) => (
				<>
					<PopoverTrigger>
						<IconButton
							aria-label="tray"
							variant="ghost"
							colorScheme="gray"
							height="auto"
							size="sm"
							icon={
								<Icon
									as={MdKeyboardArrowUp}
									boxSize={5}
									transform={
										isOpen ? 'rotate(-180deg)' : 'rotate(0deg)'
									}
									transition="transform 0.2s"
								/>
							}
						/>
					</PopoverTrigger>
					<Portal>
						<PopoverContent width="fit-content">
							<PopoverBody borderRadius="xl">
								<ButtonGroup variant="ghost" size="sm">
									<IconButton
										aria-label="NVIDIA"
										icon={<Icon boxSize={4} as={BsNvidia} />}
										colorScheme="green"
									/>
									<IconButton
										aria-label="Steam"
										icon={<Icon boxSize={4} as={FaSteam} />}
									/>
									<IconButton
										aria-label="Discord"
										icon={<Icon boxSize={4} as={FaDiscord} />}
										colorScheme="purple"
									/>
									<IconButton
										aria-label="Spotify"
										icon={<Icon boxSize={4} as={FaSpotify} />}
										colorScheme="green"
									/>
								</ButtonGroup>
							</PopoverBody>
						</PopoverContent>
					</Portal>
				</>
			)}
		</Popover>
	);
}
