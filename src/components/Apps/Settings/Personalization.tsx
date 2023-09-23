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
import { OptionBase } from 'chakra-react-select';
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
import Wallpapers9 from '@/public/wallpapers/9-win11.jpg';

const Wallpapers = [
	Wallpapers1,
	Wallpapers2,
	Wallpapers3,
	Wallpapers4,
	Wallpapers5,
	Wallpapers6,
	Wallpapers7,
	Wallpapers8,
	Wallpapers9,
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
			startTransition(() => changeWallpaper(wallpaper));
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
				<Heading size="lg" fontWeight="medium">
					Personalization
				</Heading>
				<Icon as={RiArrowRightSLine} boxSize={7} />
				<Heading size="lg" fontWeight="medium">
					Background
				</Heading>
			</HStack>

			<motion.div
				initial={{
					y: 100,
					opacity: 0.33,
				}}
				animate={{ y: 0, opacity: 1 }}
				exit={{ opacity: 0 }}
				transition={{
					duration: 0.2,
					delay: 0.1,
					ease: 'easeOut',
				}}
			>
				<Stack spacing={8}>
					<Box
						position="relative"
						w="350px"
						h="175px"
						border="8px solid black"
						borderRadius="xl"
					>
						<Image
							src={currentWallpaper}
							fill
							sizes="350px"
							quality={100}
							placeholder="blur"
							// blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkCgEAAF4AWD0K18MAAAAASUVORK5CYII="
							style={{
								// eslint-disable-next-line no-inline-styles/no-inline-styles -- ignore
								objectFit: 'cover',
							}}
							alt="current-wallpaper"
						/>

						<Card
							size="sm"
							position="absolute"
							top={4}
							right={4}
							width="90px"
							height="70%"
						>
							<CardBody
								display="flex"
								flexDirection="column"
								alignItems="flex-end"
								justifyContent="space-between"
							>
								<SkeletonText
									noOfLines={4}
									w="full"
									skeletonHeight={0.5}
									speed={0}
									startColor="white"
								/>
								<Button size="xs" p={0} h={2.5} borderRadius="sm" />
							</CardBody>
						</Card>

						<Box
							position="absolute"
							bottom={0}
							w="full"
							pointerEvents="none"
						>
							<Box __css={taskBarStyles} h={4} />
						</Box>
					</Box>

					<Accordion allowToggle allowMultiple defaultIndex={[0]}>
						<AccordionItem>
							<AccordionButton>
								<HStack flex={1} textAlign="left" spacing={6}>
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
								<Stack spacing={3} divider={<StackDivider />}>
									<Box>
										<Text mb={2}>Recent images</Text>
										<Wrap>
											{Wallpapers.map((wallpaper) => (
												<WrapItem key={wallpaper?.src}>
													<Box
														position="relative"
														w="100px"
														h="100px"
														borderRadius="sm"
														onClick={handleChangeWallpaper(wallpaper)}
														filter="brightness(0.975)"
														_hover={{
															filter:
																'brightness(1.025) contrast(1.025) saturate(105%)',

															'& img': {
																transform: 'scale(1.2)',
															},
														}}
														overflow="hidden"
													>
														<Image
															src={wallpaper}
															alt="wallpaper"
															fill
															sizes="100px"
															style={{
																objectFit: 'cover',
																borderRadius: '0.25rem',
																transition:
																	'transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95)',
															}}
															quality={100}
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
												options={wallpaperFitOptions?.map(
													(option) => ({
														label: option,
														value: option,
													})
												)}
												value={{
													label: wallpaperFit,
													value: wallpaperFit,
												}}
												onChange={handleChangeWallpaperFit}
												openMenuOnFocus
												isSearchable={false}
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
								<HStack flex={1} textAlign="left" spacing={6}>
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
									display="flex"
									alignItems="center"
									gap={2}
								>
									<FormLabel m="0">Light</FormLabel>
									<Switch
										defaultChecked={colorMode === 'dark'}
										isChecked={colorMode === 'dark'}
										size="lg"
										id="color-mode"
										onChange={toggleColorMode}
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
