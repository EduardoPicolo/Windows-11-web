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
	Slider,
	SliderFilledTrack,
	SliderThumb,
	SliderTrack,
	Stack,
	type StackProps,
} from '@chakra-ui/react';
import { HiOutlineCog6Tooth } from 'react-icons/hi2';
import { MdOutlineHeadphones } from 'react-icons/md';
import { PiWifiHighBold } from 'react-icons/pi';
import { SlPencil } from 'react-icons/sl';

import { QuickSettingsItem } from '@/components/SystemTray/QuickSettingsItem';
import { SpeakerIcon } from '@/components/VolumeIcon';
import { useSystem } from '@/contexts/System/index.';

type QuickSettingsProps = StackProps;

export function QuickSettings(props: QuickSettingsProps) {
	const {
		sound: [soundLevel, setSoundLevel],
	} = useSystem();

	return (
		<Popover
			placement="top"
			offset={[-80, 16]}
			autoFocus={false}
			returnFocusOnClose={false}
		>
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
					<SpeakerIcon volumeLevel={soundLevel} boxSize={5} />
				</HStack>
			</PopoverTrigger>
			<Portal>
				<PopoverContent w="390px">
					<PopoverBody p={6}>
						<Stack spacing={8}>
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

							<HStack spacing={4}>
								<IconButton
									aria-label="headphones"
									variant="ghost"
									colorScheme="gray"
									size="sm"
									icon={
										<SpeakerIcon
											volumeLevel={soundLevel}
											boxSize={6}
										/>
									}
								/>

								<Slider
									aria-label="sound-level-slider"
									defaultValue={soundLevel}
									onChange={setSoundLevel}
								>
									<SliderTrack>
										<SliderFilledTrack />
									</SliderTrack>
									<SliderThumb />
								</Slider>

								<IconButton
									aria-label="headphones"
									variant="ghost"
									colorScheme="gray"
									size="sm"
									icon={<Icon as={MdOutlineHeadphones} boxSize={6} />}
								/>
							</HStack>
						</Stack>
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
								icon={<Icon as={HiOutlineCog6Tooth} boxSize={6} />}
							/>
						</ButtonGroup>
					</PopoverFooter>
				</PopoverContent>
			</Portal>
		</Popover>
	);
}
