import {
	ButtonGroup,
	Grid,
	HStack,
	Icon,
	IconButton,
	Popover,
	PopoverBody,
	PopoverContent,
	PopoverFooter,
	PopoverTrigger,
	Portal,
	type StackProps,
} from '@chakra-ui/react';
import { HiOutlineCog6Tooth } from 'react-icons/hi2';
import { PiWifiHighBold } from 'react-icons/pi';
import { SlPencil } from 'react-icons/sl';

import { QuickSettingsItem } from '@/components/SystemTray/QuickSettingsItem';
import { SpeakerIcon } from '@/components/SystemTray/VolumeIcon';

type QuickSettingsProps = StackProps;

export function QuickSettings(props: QuickSettingsProps) {
	return (
		<Popover placement="top" offset={[-80, 16]}>
			{({ isOpen }) => (
				<>
					<PopoverTrigger>
						<HStack
							py={1}
							px={2}
							borderRadius="md"
							_hover={{
								background: 'hoverBg',
								boxShadow: 'thin',
							}}
							cursor="default"
							{...props}
						>
							<Icon as={PiWifiHighBold} boxSize={5} />
							<SpeakerIcon volumeLevel={1} boxSize={5} />
						</HStack>
					</PopoverTrigger>
					<Portal>
						<PopoverContent w="390px">
							<PopoverBody p={6}>
								<Grid
									templateColumns="repeat(auto-fill, minmax(95px, 1fr))"
									gap={4}
								>
									<QuickSettingsItem label="Wifi" />

									<QuickSettingsItem label="Bluetooth" />

									<QuickSettingsItem label="Airplane mode" />

									<QuickSettingsItem label="Night light" />

									<QuickSettingsItem label="Mobile hotspot" />

									<QuickSettingsItem label="Accessibility" />
								</Grid>
							</PopoverBody>

							<PopoverFooter>
								<ButtonGroup
									w="full"
									justifyContent="right"
									variant="ghost"
									colorScheme="gray"
									spacing={3}
								>
									<IconButton
										aria-label="edit"
										icon={<Icon as={SlPencil} boxSize={5} />}
									/>

									<IconButton
										aria-label="edit"
										icon={
											<Icon as={HiOutlineCog6Tooth} boxSize={6} />
										}
									/>
								</ButtonGroup>
							</PopoverFooter>
						</PopoverContent>
					</Portal>
				</>
			)}
		</Popover>
	);
}
