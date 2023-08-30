import {
	ButtonGroup,
	Divider,
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
	useColorMode,
} from '@chakra-ui/react';
import { BiBluetooth } from 'react-icons/bi';
import { HiOutlineCog6Tooth } from 'react-icons/hi2';
import {
	IoAccessibilityOutline,
	IoAirplaneOutline,
} from 'react-icons/io5';
import {
	MdOutlineDarkMode,
	MdOutlineHeadphones,
	MdOutlineLightMode,
} from 'react-icons/md';
import { PiWifiHighBold } from 'react-icons/pi';
import { RiArrowRightSLine } from 'react-icons/ri';
import { SlPencil } from 'react-icons/sl';
import { TbAccessPoint } from 'react-icons/tb';

import { SpeakerIcon } from '@/assets/VolumeIcon';
import { QuickSettingsItem } from '@/components/SystemTray/QuickSettingsItem';
import { useSystem } from '@/contexts/System/index.';

export function QuickSettings() {
	const {
		sound: [soundLevel, setSoundLevel],
	} = useSystem();

	const { toggleColorMode, colorMode } = useColorMode();

	return (
		<Popover placement="top" offset={[-80, 16]}>
			<PopoverTrigger>
				<HStack
					as="button"
					py={1}
					px={2}
					borderRadius="md"
					_hover={{
						background: 'hoverBg',
						boxShadow: 'thin',
					}}
					cursor="default"
					transition="all 0.2s"
				>
					<Icon as={PiWifiHighBold} boxSize={5} />
					<SpeakerIcon volumeLevel={soundLevel} boxSize={5} />
				</HStack>
			</PopoverTrigger>
			<Portal>
				<PopoverContent w="400px">
					<PopoverBody p={6}>
						<Stack spacing={8}>
							<Grid templateColumns="repeat(3, 1fr)" gap={4}>
								<QuickSettingsItem
									label="Wifi"
									justifyContent="space-evenly"
									initialActiveState
								>
									<Icon as={PiWifiHighBold} boxSize={5} />
									<Divider orientation="vertical" />
									<Icon as={RiArrowRightSLine} boxSize={5} />
								</QuickSettingsItem>

								<QuickSettingsItem
									label="Bluetooth"
									justifyContent="space-evenly"
									initialActiveState
								>
									<Icon as={BiBluetooth} boxSize={5} />
									<Divider orientation="vertical" />
									<Icon as={RiArrowRightSLine} boxSize={5} />
								</QuickSettingsItem>

								<QuickSettingsItem label="Airplane mode">
									<Icon as={IoAirplaneOutline} boxSize={5} />
								</QuickSettingsItem>

								<QuickSettingsItem
									label="Night light"
									onClick={toggleColorMode}
								>
									<Icon
										as={
											colorMode === 'light'
												? MdOutlineDarkMode
												: MdOutlineLightMode
										}
										boxSize={5}
									/>
								</QuickSettingsItem>

								<QuickSettingsItem label="Mobile hotspot">
									<Icon as={TbAccessPoint} boxSize={5} />
								</QuickSettingsItem>

								<QuickSettingsItem label="Accessibility">
									<Icon as={IoAccessibilityOutline} boxSize={5} />
								</QuickSettingsItem>
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
