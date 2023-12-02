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
		<Popover gutter={16} offset={[-95, 16]} placement="top">
			<PopoverTrigger>
				<HStack
					_hover={{
						background: 'hoverBg',
						boxShadow: 'thin',
					}}
					as="button"
					borderRadius="md"
					cursor="default"
					px={2}
					py={1}
					transition="all 0.2s"
				>
					<Tooltip
						gutter={20}
						label="Internet access"
						openDelay={1000}
					>
						<Flex>
							<Icon as={PiWifiHighBold} boxSize={5} />
						</Flex>
					</Tooltip>
					<Tooltip
						gutter={20}
						label={`Speakers (High Definition Audio Device): ${soundLevel}%`}
						openDelay={1000}
					>
						<Flex>
							<SpeakerIcon
								boxSize={5}
								isMuted={isSoundMuted}
								volumeLevel={soundLevel}
							/>
						</Flex>
					</Tooltip>
				</HStack>
			</PopoverTrigger>
			<Portal>
				<PopoverContent w="400px">
					<PopoverBody p={6}>
						<Stack spacing={8}>
							<Grid gap={4} templateColumns="repeat(3, 1fr)">
								<QuickSettingsItem
									defaultChecked
									justifyContent="space-evenly"
									label="Wifi"
								>
									<Icon as={PiWifiHighBold} boxSize={5} />
									<Divider orientation="vertical" />
									<Icon as={RiArrowRightSLine} boxSize={5} />
								</QuickSettingsItem>

								<QuickSettingsItem
									defaultChecked
									justifyContent="space-evenly"
									label="Bluetooth"
								>
									<Icon as={BiBluetooth} boxSize={5} />
									<Divider orientation="vertical" />
									<Icon as={RiArrowRightSLine} boxSize={5} />
								</QuickSettingsItem>

								<QuickSettingsItem label="Airplane mode">
									<Icon as={IoAirplaneOutline} boxSize={5} />
								</QuickSettingsItem>

								<QuickSettingsItem
									isChecked={colorMode === 'dark'}
									label="Color mode"
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
									colorScheme="gray"
									icon={
										<SpeakerIcon
											boxSize={5}
											isMuted={isSoundMuted}
											volumeLevel={soundLevel}
										/>
									}
									onClick={toggleSoundMuted}
									size="sm"
									variant="ghost"
								/>

								<Slider
									aria-label="sound-level-slider"
									defaultValue={soundLevel}
									isDisabled={isSoundMuted}
									onChange={setSoundLevel}
								>
									<SliderTrack>
										<SliderFilledTrack />
									</SliderTrack>
									<SliderThumb />
								</Slider>

								<IconButton
									aria-label="headphones"
									colorScheme="gray"
									icon={<Icon as={MdOutlineHeadphones} boxSize={5} />}
									size="sm"
									variant="ghost"
								/>
							</HStack>
						</Stack>
					</PopoverBody>

					<PopoverFooter>
						<ButtonGroup
							justifyContent="right"
							variant="ghost"
							w="full"
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
