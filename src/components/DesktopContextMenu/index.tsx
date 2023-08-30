import {
	HStack,
	Icon,
	MenuDivider,
	MenuItem,
	Text,
} from '@chakra-ui/react';
import { BsBrush, BsGrid } from 'react-icons/bs';
import { RiArrowRightSLine } from 'react-icons/ri';
import { TbReload } from 'react-icons/tb';

import { TerminalIcon } from '@/assets/ TerminalIcon';
import { AddIcon } from '@/assets/AddIcon';
import { DisplaySettingsIcon } from '@/assets/DisplaySettingsIcon';
import { SortIcon } from '@/assets/SortIcon';
import {
	ContextMenu,
	type ContextMenuProps,
} from '@/components/ContextMenu';

type DesktopContextMenuProps = Omit<ContextMenuProps, 'children'>;

export function DesktopContextMenu(props: DesktopContextMenuProps) {
	return (
		<ContextMenu size="sm" {...props}>
			<MenuItem icon={<Icon as={BsGrid} />}>
				<HStack justifyContent="space-between">
					<Text>View</Text>
					<Icon as={RiArrowRightSLine} boxSize={4} mr={-1.5} />
				</HStack>
			</MenuItem>
			<MenuItem icon={<SortIcon />}>
				<HStack justifyContent="space-between">
					<Text>Sort by</Text>
					<Icon as={RiArrowRightSLine} boxSize={4} mr={-1.5} />
				</HStack>
			</MenuItem>
			<MenuItem icon={<Icon as={TbReload} />}>Refresh</MenuItem>
			<MenuDivider />
			<MenuItem icon={<AddIcon boxSize="20px" />}>
				<HStack justifyContent="space-between">
					<Text>New</Text>
					<Icon as={RiArrowRightSLine} boxSize={4} mr={-1.5} />
				</HStack>
			</MenuItem>
			<MenuDivider />
			<MenuItem icon={<DisplaySettingsIcon boxSize="19px" />}>
				Display Settings
			</MenuItem>
			<MenuItem icon={<Icon as={BsBrush} />}>Personalize</MenuItem>
			<MenuDivider />
			<MenuItem icon={<TerminalIcon />}>Open in Terminal</MenuItem>
			<MenuDivider />
			<MenuItem>Show more options</MenuItem>
		</ContextMenu>
	);
}
