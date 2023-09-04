import Image from 'next/image';
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
	Text,
	useColorMode,
	useStyleConfig,
} from '@chakra-ui/react';
import { FaImage } from 'react-icons/fa';
import { RiArrowRightSLine } from 'react-icons/ri';
import { motion } from 'framer-motion';

import { useSystem } from '@/contexts/System/index.';

export function Personalisation() {
	const {
		wallpaper: [currentWallpaper, changeWallpaper],
	} = useSystem();

	const { colorMode } = useColorMode();

	const taskBarStyles = useStyleConfig('Taskbar');

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

					<Accordion
						allowToggle
						border="1px solid"
						borderColor="blackAlpha.200"
						borderRadius="md"
						bg="gray.800"
					>
						<AccordionItem borderRadius="inherit">
							<AccordionButton
								p={5}
								borderRadius="inherit"
								_hover={{
									bg: 'hoverBg',
								}}
							>
								<HStack flex={1} textAlign="left" spacing={8}>
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
							<AccordionPanel pb={4}>
								<Text>Recent images</Text>
							</AccordionPanel>
							<AccordionPanel pb={4}>
								<Text>Choose a photo</Text>
							</AccordionPanel>
						</AccordionItem>
					</Accordion>
				</Stack>
			</motion.div>
		</Stack>
	);
}
