import {
	HStack,
	Icon,
	MenuDivider,
	MenuItemOption,
	MenuList,
	MenuOptionGroup,
	Text,
} from '@chakra-ui/react';
import { BiCheck } from 'react-icons/bi';
import { BsGrid } from 'react-icons/bs';
import { CiGrid42 } from 'react-icons/ci';
import {
	PiDesktopFill,
	PiDotDuotone,
	PiSlideshowBold,
} from 'react-icons/pi';
import { TbBoxAlignTopLeft, TbSquareRounded } from 'react-icons/tb';

export function ViewSubmenu() {
	return (
		<MenuList>
			<MenuOptionGroup defaultValue="medium" type="radio">
				<MenuItemOption
					icon={<Icon as={PiDotDuotone} boxSize={5} />}
					value="large"
					closeOnSelect={false}
				>
					<HStack justifyContent="space-between">
						<HStack>
							<Icon as={TbSquareRounded} />
							<Text>Large icons</Text>
						</HStack>

						<Text fontSize="xs" fontWeight="light">
							Ctrl+Shift+2
						</Text>
					</HStack>
				</MenuItemOption>

				<MenuItemOption
					icon={<Icon as={PiDotDuotone} boxSize={5} />}
					value="medium"
					closeOnSelect={false}
				>
					<HStack justifyContent="space-between">
						<HStack>
							<Icon as={PiSlideshowBold} />
							<Text> Medium icons</Text>
						</HStack>

						<Text fontSize="xs" fontWeight="light">
							Ctrl+Shift+3
						</Text>
					</HStack>
				</MenuItemOption>

				<MenuItemOption
					icon={<Icon as={PiDotDuotone} boxSize={5} />}
					value="small"
					closeOnSelect={false}
				>
					<HStack justifyContent="space-between">
						<HStack>
							<Icon as={BsGrid} />
							<Text> Small icons</Text>
						</HStack>

						<Text fontSize="xs" fontWeight="light">
							Ctrl+Shift+4
						</Text>
					</HStack>
				</MenuItemOption>
			</MenuOptionGroup>

			<MenuDivider />

			<MenuOptionGroup type="checkbox">
				<MenuItemOption
					icon={<Icon as={BiCheck} />}
					value="auto"
					closeOnSelect={false}
				>
					<HStack>
						<Icon
							as={CiGrid42}
							sx={{
								path: {
									strokeWidth: '1px',

									'&:nth-child(1)': {
										color: 'blue.600',
										fill: 'blue.600',
									},
								},
							}}
						/>
						<Text>Auto arrange icons</Text>
					</HStack>
				</MenuItemOption>

				<MenuItemOption
					icon={<Icon as={BiCheck} />}
					value="align"
					defaultChecked
					closeOnSelect={false}
				>
					<HStack>
						<Icon
							as={TbBoxAlignTopLeft}
							sx={{
								'& > path:nth-child(2)': {
									color: 'blue.600',
								},
							}}
						/>
						<Text>Align icons to grid</Text>
					</HStack>
				</MenuItemOption>
			</MenuOptionGroup>

			<MenuDivider />

			<MenuOptionGroup type="checkbox">
				<MenuItemOption
					icon={<Icon as={BiCheck} />}
					value="show"
					closeOnSelect={false}
				>
					<HStack>
						<Icon as={PiDesktopFill} />
						<Text>Show desktop icons</Text>
					</HStack>
				</MenuItemOption>
			</MenuOptionGroup>
		</MenuList>
	);
}
