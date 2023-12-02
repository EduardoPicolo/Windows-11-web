"use client";

import {
	Box,
	Button,
	ButtonGroup,
	Grid,
	GridItem,
	Heading,
	HStack,
	Icon,
	Input,
	InputGroup,
	InputRightElement,
	SkeletonCircle,
	Stack,
	type StackProps,
	Tab,
	TabList,
	TabPanel,
	TabPanels,
	Tabs,
	Text,
	useTabsContext,
} from '@chakra-ui/react';
import { useState } from 'react';
import { IoSearch } from 'react-icons/io5';

import { settingsItems } from '@/components/Apps/Settings/settingsItems';

type SettingsSidebarProps = StackProps;

export function SettingsSidebar(props: SettingsSidebarProps) {
	const { selectedIndex } = useTabsContext();

	console.log('selectedIndex', selectedIndex);

	return (
		<Stack spacing={8} {...props}>
			<HStack
				_hover={{
					bg: 'hoverBg',
				}}
				borderRadius="md"
				p={2}
			>
				<SkeletonCircle size="16" />
				<Box>
					<Heading fontWeight="semibold" size="sm">
						Eduardo Pícolo
					</Heading>
					<Text fontSize="xs" fontWeight="medium">
						eduardonpicolo@hotmail.com
					</Text>
				</Box>
			</HStack>

			<InputGroup>
				<InputRightElement pointerEvents="none">
					<Icon as={IoSearch} boxSize={4} />
				</InputRightElement>
				<Input
					border="none"
					borderBottom="1px solid"
					borderColor="whiteAlpha.700"
					borderRadius="md"
					borderStyle="inset"
					placeholder="Find a setting"
				/>
			</InputGroup>

			<ButtonGroup colorScheme="gray" variant="ghost">
				<TabList gap={1} w="full">
					{settingsItems.map((item, index) => (
						<Tab
							_selected={{
								_before: {
									content: '""',
									position: 'absolute',
									top: '50%',
									left: 0,
									transform: 'translateY(-50%)',
									width: '3px',
									height: '40%',
									bg: 'primary',
									borderRadius: 'lg',
								},
							}}
							as={Button}
							bg={index === selectedIndex ? 'hoverBg' : 'transparent'}
							color="inherit"
							fontSize="sm"
							fontWeight="normal"
							iconSpacing={4}
							justifyContent="flex-start"
							key={item.label}
							leftIcon={item.icon}
							position="relative"
						>
							{item.label}
						</Tab>
					))}
				</TabList>
			</ButtonGroup>
		</Stack>
	);
}

export function Settings() {
	const [activeIndex, setIndex] = useState(3);

	return (
		<Tabs
			height="full"
			index={activeIndex}
			isLazy
			lazyBehavior="unmount"
			onChange={setIndex}
			orientation="vertical"
			variant="unstyled"
			width="full"
		>
			<Grid gap={8} gridTemplateColumns="300px 1fr" p={4} w="full">
				<GridItem>
					<SettingsSidebar position="sticky" top={4} />
				</GridItem>

				<GridItem
					margin="0 auto"
					maxWidth="1024px"
					position="relative"
					// overflow="clip"
					width="full"
				>
					<TabPanels>
						{settingsItems.map((item) => (
							<TabPanel key={item.label}>{item.panel}</TabPanel>
						))}
					</TabPanels>
				</GridItem>
			</Grid>
		</Tabs>
	);
}
