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
	Text,
	VStack,
} from '@chakra-ui/react';
import { IoSearch } from 'react-icons/io5';

import { settingsItems } from '@/components/Apps/Settings/settingsItems';

export function SettingsSidebar() {
	return (
		<VStack align="stretch" spacing={8}>
			<HStack
				_hover={{
					bg: 'hoverBg',
				}}
			>
				<SkeletonCircle boxSize={16} />
				<Box>
					<Heading size="sm" fontWeight="semibold">
						Eduardo Pícolo
					</Heading>
					<Text fontSize="sm" fontWeight="medium">
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
				<Stack w="full" align="stretch" spacing={1}>
					{settingsItems.map((item) => (
						<Button
							key={item.label}
							leftIcon={item.icon}
							iconSpacing={4}
							justifyContent="flex-start"
							fontWeight="normal"
							color="inherit"
						>
							{item.label}
						</Button>
					))}
				</Stack>
			</ButtonGroup>
		</VStack>
	);
}

export function Settings() {
	return (
		<Grid gridTemplateColumns="300px 1fr" p={4} gap={8}>
			<GridItem>
				<SettingsSidebar />
			</GridItem>

			<GridItem>
				<Heading size="lg" fontWeight="semibold">
					Personalization &gt; Background
				</Heading>
			</GridItem>
		</Grid>
	);
}
