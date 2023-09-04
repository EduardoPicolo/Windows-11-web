import {
	ButtonGroup,
	Divider,
	Flex,
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
	Tooltip,
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
		soundMuted: [isSoundMuted, { toggle: toggleSoundMuted }],
	} = useSystem();

	const { toggleColorMode, colorMode } = useColorMode();

	return (
		<Popover placement="top" gutter={16} offset={[-95, 16]}>
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
					<Tooltip
						openDelay={1000}
						label="Internet access"
						gutter={20}
					>
						<Flex>
							<Icon as={PiWifiHighBold} boxSize={5} />
						</Flex>
					</Tooltip>
					<Tooltip
						openDelay={1000}
						label={`Speakers (High Definition Audio Device): ${soundLevel}%`}
						gutter={20}
					>
						<Flex>
							<SpeakerIcon
								volumeLevel={soundLevel}
								isMuted={isSoundMuted}
								boxSize={5}
							/>
						</Flex>
					</Tooltip>
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
									defaultChecked
								>
									<Icon as={PiWifiHighBold} boxSize={5} />
									<Divider orientation="vertical" />
									<Icon as={RiArrowRightSLine} boxSize={5} />
								</QuickSettingsItem>

								<QuickSettingsItem
									label="Bluetooth"
									justifyContent="space-evenly"
									defaultChecked
								>
									<Icon as={BiBluetooth} boxSize={5} />
									<Divider orientation="vertical" />
									<Icon as={RiArrowRightSLine} boxSize={5} />
								</QuickSettingsItem>

								<QuickSettingsItem label="Airplane mode">
									<Icon as={IoAirplaneOutline} boxSize={5} />
								</QuickSettingsItem>

								<QuickSettingsItem
									label="Color mode"
									onClick={toggleColorMode}
									isChecked={colorMode === 'dark'}
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
											isMuted={isSoundMuted}
											boxSize={5}
										/>
									}
									onClick={toggleSoundMuted}
								/>

								<Slider
									aria-label="sound-level-slider"
									defaultValue={soundLevel}
									onChange={setSoundLevel}
									isDisabled={isSoundMuted}
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
									icon={<Icon as={MdOutlineHeadphones} boxSize={5} />}
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
							// size="sm"
							spacing={3}
						>
							<IconButton
								aria-label="edit"
								icon={<Icon as={SlPencil} boxSize={4} />}
							/>

							<IconButton
								aria-label="edit"
								icon={<Icon as={HiOutlineCog6Tooth} boxSize={5} />}
							/>
						</ButtonGroup>
					</PopoverFooter>
				</PopoverContent>
			</Portal>
		</Popover>
	);
}
