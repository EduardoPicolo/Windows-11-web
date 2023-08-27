import {
	type BoxProps,
	Icon,
	IconButton,
	Popover,
	PopoverBody,
	PopoverCloseButton,
	PopoverContent,
	PopoverTrigger,
	Portal,
} from '@chakra-ui/react';
import { MdKeyboardArrowUp } from 'react-icons/md';
import { SlArrowUp } from 'react-icons/sl';

type AppsTrayProps = BoxProps;

export function AppsTray(props: AppsTrayProps) {
	return (
		<Popover>
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
							cursor="default"
						/>
					</PopoverTrigger>
					<Portal>
						<PopoverContent>
							<PopoverCloseButton />

							<PopoverBody>
								<Icon as={SlArrowUp} boxSize={4} />
							</PopoverBody>
						</PopoverContent>
					</Portal>
				</>
			)}
		</Popover>
	);
}
