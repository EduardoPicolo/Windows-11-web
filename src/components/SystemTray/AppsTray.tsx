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
		<Popover gutter={16} placement="top">
			{({ isOpen }) => (
				<>
					<PopoverTrigger>
						<IconButton
							_light={{
								_hover: {
									bg: 'hoverBg',
								},
							}}
							aria-label="tray"
							colorScheme="gray"
							height="auto"
							icon={
								<Icon
									as={MdKeyboardArrowUp}
									boxSize={5}
									transform={
										isOpen ? 'rotate(-180deg)' : 'rotate(0deg)'
									}
									transition="transform 0.3s ease-in-out"
								/>
							}
							size="sm"
							variant="ghost"
						/>
					</PopoverTrigger>
					<Portal>
						<PopoverContent width="fit-content">
							<PopoverBody borderRadius="xl">
								<ButtonGroup size="sm" variant="ghost">
									<IconButton
										aria-label="NVIDIA"
										colorScheme="green"
										icon={<Icon as={BsNvidia} boxSize={4} />}
									/>
									<IconButton
										aria-label="Steam"
										icon={<Icon as={FaSteam} boxSize={4} />}
									/>
									<IconButton
										aria-label="Discord"
										colorScheme="purple"
										icon={<Icon as={FaDiscord} boxSize={4} />}
									/>
									<IconButton
										aria-label="Spotify"
										colorScheme="green"
										icon={<Icon as={FaSpotify} boxSize={4} />}
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
