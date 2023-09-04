import { useState } from 'react';
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
	Tab,
	TabList,
	TabPanel,
	TabPanels,
	Tabs,
	Text,
	useTabsContext,
	VStack,
} from '@chakra-ui/react';
import { IoSearch } from 'react-icons/io5';

import { settingsItems } from '@/components/Apps/Settings/settingsItems';

export function SettingsSidebar() {
	const { selectedIndex } = useTabsContext();

	console.log('selectedIndex', selectedIndex);

	return (
		<VStack align="stretch" spacing={8}>
			<HStack
				p={2}
				_hover={{
					bg: 'hoverBg',
				}}
				borderRadius="md"
			>
				<SkeletonCircle size="16" />
				<Box>
					<Heading size="sm" fontWeight="semibold">
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
					borderRadius="md"
					border="none"
					borderBottom="1px solid"
					borderColor="whiteAlpha.700"
					borderStyle="inset"
					placeholder="Find a setting"
				/>
			</InputGroup>

			<ButtonGroup variant="ghost" colorScheme="gray">
				<TabList w="full" gap={1}>
					{settingsItems.map((item, index) => (
						<Tab
							key={item.label}
							as={Button}
							leftIcon={item.icon}
							iconSpacing={4}
							justifyContent="flex-start"
							fontSize="sm"
							fontWeight="normal"
							color="inherit"
							bg={index === selectedIndex ? 'hoverBg' : 'transparent'}
							position="relative"
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
						>
							{item.label}
						</Tab>
					))}
				</TabList>
			</ButtonGroup>
		</VStack>
	);
}

export function Settings() {
	const [activeIndex, setIndex] = useState(0);

	return (
		<Tabs
			index={activeIndex}
			onChange={setIndex}
			orientation="vertical"
			variant="unstyled"
			width="full"
			height="full"
			isLazy
			lazyBehavior="unmount"
		>
			<Grid gridTemplateColumns="300px 1fr" w="full" p={4} gap={8}>
				<GridItem>
					<SettingsSidebar />
				</GridItem>

				<GridItem
					position="relative"
					overflow="clip"
					width="full"
					maxWidth="1024px"
					margin="0 auto"
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
