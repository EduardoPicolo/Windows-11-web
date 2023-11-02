import {
	Icon,
	MenuDivider,
	MenuItem,
	MenuList,
} from '@chakra-ui/react';
import { HiOutlineCog6Tooth } from 'react-icons/hi2';
import { TbActivityHeartbeat } from 'react-icons/tb';

import type { ContextMenuProps } from '@/components/ContextMenu';
import { ContextMenu } from '@/components/ContextMenu';

type TaskbarContextMenuProps = Omit<ContextMenuProps, 'children'>;

export function TaskbarContextMenu(props: TaskbarContextMenuProps) {
	return (
		<ContextMenu size="sm" {...props}>
			<MenuList>
				<MenuItem
					icon={<Icon as={TbActivityHeartbeat} border="1px solid" />}
				>
					Task Manager
				</MenuItem>
				<MenuDivider />
				<MenuItem icon={<Icon as={HiOutlineCog6Tooth} />}>
					Taskbar settings
				</MenuItem>
			</MenuList>
		</ContextMenu>
	);
}
