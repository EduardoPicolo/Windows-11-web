import Image from 'next/image';
import { useCallback } from 'react';
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
	Heading,
	HStack,
	Icon,
	SkeletonText,
	Stack,
	StackDivider,
	Text,
	useColorMode,
	useStyleConfig,
	Wrap,
	WrapItem,
} from '@chakra-ui/react';
import { FaImage } from 'react-icons/fa';
import { RiArrowRightSLine } from 'react-icons/ri';
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

const Wallpapers = [
	Wallpapers1,
	Wallpapers2,
	Wallpapers3,
	Wallpapers4,
	Wallpapers5,
	Wallpapers6,
	Wallpapers7,
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

	const { colorMode } = useColorMode();

	const taskBarStyles = useStyleConfig('Taskbar');

	const handleChangeWallpaper = useCallback(
		(wallpaper: Wallpaper) => () => {
			changeWallpaper(wallpaper);
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
					opacity: 0.3,
				}}
				animate={{ y: 0, opacity: 1 }}
				exit={{ opacity: 0 }}
				transition={{
					duration: 0.3,
					ease: 'circOut',
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
											apply to all desktops. apply to all your
											desktops
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
														borderRadius="md"
														onClick={handleChangeWallpaper(wallpaper)}
													>
														<Image
															src={wallpaper}
															alt="wallpaper"
															layout="fill"
															style={{
																objectFit: 'cover',
																borderRadius: '0.25rem',
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

										<Button colorScheme="whiteAlpha">
											Browse photos
										</Button>
									</HStack>
								</Stack>
							</AccordionPanel>
						</AccordionItem>
					</Accordion>
				</Stack>
			</motion.div>
		</Stack>
	);
}
