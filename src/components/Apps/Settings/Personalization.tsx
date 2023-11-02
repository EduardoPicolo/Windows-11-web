import Image from 'next/image';
import { useCallback, useTransition } from 'react';
import {
	Accordion,
	AccordionButton,
	AccordionIcon,
	AccordionItem,
	AccordionPanel,
	Box,
	Button,
	Card,
	CardBody,
	FormControl,
	FormLabel,
	Heading,
	HStack,
	Icon,
	SkeletonText,
	Stack,
	StackDivider,
	Switch,
	Text,
	useColorMode,
	useStyleConfig,
	Wrap,
	WrapItem,
} from '@chakra-ui/react';
import { FaImage } from 'react-icons/fa';
import { RiArrowRightSLine } from 'react-icons/ri';
import { VscColorMode } from 'react-icons/vsc';
import type { OptionBase } from 'chakra-react-select';
import { motion } from 'framer-motion';

import { CustomSelect } from '@/components/Select';
import { wallpaperFitOptions } from '@/contexts/System/helpers';
import { useSystem } from '@/contexts/System/index.';
import Wallpapers1 from '@/public/wallpapers/1-win11.jpg';
import Wallpapers2 from '@/public/wallpapers/2-win11.jpg';
import Wallpapers3 from '@/public/wallpapers/3-win11.png';
import Wallpapers4 from '@/public/wallpapers/4-win11.jpg';
import Wallpapers5 from '@/public/wallpapers/5-win11.jpg';
import Wallpapers6 from '@/public/wallpapers/6-win11.jpg';
import Wallpapers7 from '@/public/wallpapers/7-win11.jpg';
import Wallpapers8 from '@/public/wallpapers/8-win11.png';

const Wallpapers = [
	Wallpapers1,
	Wallpapers2,
	Wallpapers3,
	Wallpapers4,
	Wallpapers5,
	Wallpapers6,
	Wallpapers7,
	Wallpapers8,
];

type WallpaperFitOption = OptionBase & {
	value: WallpaperFitStyle;
	label: WallpaperFitStyle;
};

export function Personalisation() {
	const {
		wallpaper: [currentWallpaper, changeWallpaper],
		wallpaperFit: [wallpaperFit, changeWallpaperFit],
	} = useSystem();

	const [, startTransition] = useTransition();

	const { colorMode, toggleColorMode } = useColorMode();

	const taskBarStyles = useStyleConfig('Taskbar');

	const handleChangeWallpaper = useCallback(
		(wallpaper: Wallpaper) => () => {
			startTransition(() => {
				changeWallpaper(wallpaper);
			});
		},
		[changeWallpaper]
	);

	const handleChangeWallpaperFit = useCallback(
		(option: WallpaperFitOption | null) => {
			changeWallpaperFit(option?.value ?? 'cover');
		},
		[changeWallpaperFit]
	);

	return (
		<Stack spacing={8}>
			<HStack spacing={4}>
				<Heading fontWeight="medium" size="lg">
					Personalization
				</Heading>
				<Icon as={RiArrowRightSLine} boxSize={7} />
				<Heading fontWeight="medium" size="lg">
					Background
				</Heading>
			</HStack>

			<motion.div
				animate={{ y: 0, opacity: 1 }}
				exit={{ opacity: 0 }}
				initial={{
					y: 100,
					opacity: 0.33,
				}}
				transition={{
					duration: 0.2,
					delay: 0.1,
					ease: 'easeOut',
				}}
			>
				<Stack spacing={8}>
					<Box
						border="8px solid black"
						borderRadius="xl"
						h="175px"
						position="relative"
						w="350px"
					>
						<Image
							alt="current-wallpaper"
							fill
							quality={100}
							sizes="350px"
							src={currentWallpaper}
							placeholder="blur"
							// blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkCgEAAF4AWD0K18MAAAAASUVORK5CYII="
							style={{
								// eslint-disable-next-line no-inline-styles/no-inline-styles -- ignore
								objectFit: 'cover',
							}}
						/>

						<Card
							height="70%"
							position="absolute"
							right={4}
							size="sm"
							top={4}
							width="90px"
						>
							<CardBody
								alignItems="flex-end"
								display="flex"
								flexDirection="column"
								justifyContent="space-between"
							>
								<SkeletonText
									noOfLines={4}
									skeletonHeight={0.5}
									speed={0}
									startColor="white"
									w="full"
								/>
								<Button borderRadius="sm" h={2.5} p={0} size="xs" />
							</CardBody>
						</Card>

						<Box
							bottom={0}
							pointerEvents="none"
							position="absolute"
							w="full"
						>
							<Box __css={taskBarStyles} h={4} />
						</Box>
					</Box>

					<Accordion allowMultiple allowToggle defaultIndex={[0]}>
						<AccordionItem
							sx={{
								'.chakra-collapse': {
									overflow: 'visible !important',
								},
							}}
						>
							<AccordionButton>
								<HStack flex={1} spacing={6} textAlign="left">
									<Icon as={FaImage} boxSize={6} />
									<Box>
										<Text>Personalize your background</Text>
										<Text fontSize="xs">
											A picture background applies to you current
											desktop. Solid color or slideshow backgrounds
											apply to all desktops
										</Text>
									</Box>
								</HStack>
								<AccordionIcon />
							</AccordionButton>

							<AccordionPanel>
								<Stack divider={<StackDivider />} spacing={3}>
									<Box>
										<Text mb={2}>Recent images</Text>
										<Wrap>
											{Wallpapers.map((wallpaper) => (
												<WrapItem key={wallpaper.src}>
													<Box
														_hover={{
															filter:
																'brightness(1.025) contrast(1.025) saturate(105%)',

															'& img': {
																transform: 'scale(1.2)',
															},
														}}
														borderRadius="sm"
														filter="brightness(0.975)"
														h="100px"
														onClick={handleChangeWallpaper(wallpaper)}
														overflow="hidden"
														position="relative"
														w="100px"
													>
														<Image
															alt="wallpaper"
															fill
															quality={100}
															sizes="100px"
															src={wallpaper}
															/* eslint-disable no-inline-styles/no-inline-styles -- ignore */
															style={{
																objectFit: 'cover',
																borderRadius: '0.25rem',
																transition:
																	'transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95)',
															}}
															/* eslint-enable no-inline-styles/no-inline-styles */
															placeholder="blur"
															// blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkCgEAAF4AWD0K18MAAAAASUVORK5CYII="
														/>
													</Box>
												</WrapItem>
											))}
										</Wrap>
									</Box>

									<HStack justifyContent="space-between">
										<Text>Choose a fit for your desktop image</Text>

										<Box w="160px">
											<CustomSelect<WallpaperFitOption, false>
												isSearchable={false}
												menuPlacement="auto"
												onChange={handleChangeWallpaperFit}
												openMenuOnFocus
												options={wallpaperFitOptions.map(
													(option) => ({
														label: option,
														value: option,
													})
												)}
												value={{
													label: wallpaperFit,
													value: wallpaperFit,
												}}
											/>
										</Box>
									</HStack>

									<HStack justifyContent="space-between">
										<Text>Choose a photo</Text>

										<Button colorScheme="gray" isDisabled>
											Browse photos
										</Button>
									</HStack>
								</Stack>
							</AccordionPanel>
						</AccordionItem>
					</Accordion>

					<Text fontWeight="medium">Related settings</Text>

					<Accordion allowToggle>
						<AccordionItem>
							<AccordionButton>
								<HStack flex={1} spacing={6} textAlign="left">
									<Icon as={VscColorMode} boxSize={6} />
									<Box>
										<Text>Color mode</Text>
										<Text fontSize="xs">
											Change the color mode of your desktop
										</Text>
									</Box>
								</HStack>
								<AccordionIcon />
							</AccordionButton>

							<AccordionPanel>
								<FormControl
									alignItems="center"
									display="flex"
									gap={2}
								>
									<FormLabel m="0">Light</FormLabel>
									<Switch
										defaultChecked={colorMode === 'dark'}
										id="color-mode"
										isChecked={colorMode === 'dark'}
										onChange={toggleColorMode}
										size="lg"
									/>
									<FormLabel m="0">Dark</FormLabel>
								</FormControl>
							</AccordionPanel>
						</AccordionItem>
					</Accordion>
				</Stack>
			</motion.div>
		</Stack>
	);
}
