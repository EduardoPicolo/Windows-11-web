import { Icon, MenuDivider, MenuItem } from '@chakra-ui/react';
import { BsBrush, BsGrid } from 'react-icons/bs';
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
			<MenuItem icon={<Icon as={BsGrid} />}>View</MenuItem>
			<MenuItem icon={<SortIcon />}>Sort by</MenuItem>
			<MenuItem icon={<Icon as={TbReload} />}>Refresh</MenuItem>
			<MenuDivider />
			<MenuItem icon={<AddIcon boxSize="20px" />}>New</MenuItem>
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
