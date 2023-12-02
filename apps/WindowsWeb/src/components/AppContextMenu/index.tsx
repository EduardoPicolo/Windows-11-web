import {
	ButtonGroup,
	Icon,
	IconButton,
	MenuDivider,
	MenuItem,
	MenuList,
} from '@chakra-ui/react';
import { ContextMenu, type ContextMenuProps } from '@repo/ui/components';
import Image from 'next/image';
import type { MouseEventHandler } from 'react';
import { useCallback } from 'react';
import { BiRename } from 'react-icons/bi';
import { BsFolderSymlink, BsPinAngle } from 'react-icons/bs';
import { FcOpenedFolder } from 'react-icons/fc';
import { HiOutlineTrash } from 'react-icons/hi2';
import { MdOutlineFolderZip } from 'react-icons/md';
import { PiStar } from 'react-icons/pi';
import { RxCopy } from 'react-icons/rx';
import { TbCut } from 'react-icons/tb';
import {
	VscFileSymlinkDirectory,
	VscSymbolProperty,
} from 'react-icons/vsc';

import { useWindows } from '@/contexts/Windows';
import RunIcon from '@/public/icons/run.png';

type AppContextMenuProps = Omit<ContextMenuProps, 'children'> & {
	app: App;
	children?: ContextMenuProps['children'];
};

/**
 * `AppContextMenu` is used to open the context menu for an desktop
 * app.
 */
export function AppContextMenu(props: AppContextMenuProps) {
	const { app, children, ...rest } = props;

	const { addWindow } = useWindows();

	const handleAddWindow = useCallback<
		MouseEventHandler<HTMLButtonElement>
	>(
		(_event) => {
			addWindow(app);
		},
		[addWindow, app]
	);

	return (
		<ContextMenu size="sm" {...rest}>
			{(internalProps) => (
				<MenuList minWidth="275px">
					<ButtonGroup colorScheme="gray" spacing={1} variant="ghost">
						<IconButton
							aria-label="Cut"
							icon={<Icon as={TbCut} boxSize="18px" />}
						/>
						<IconButton
							aria-label="Copy"
							icon={<Icon as={RxCopy} boxSize="18px" />}
						/>
						<IconButton
							aria-label="rename"
							icon={<Icon as={BiRename} boxSize="18px" />}
						/>
						<IconButton
							aria-label="move"
							icon={<Icon as={BsFolderSymlink} boxSize="18px" />}
						/>
						<IconButton
							aria-label="remove"
							colorScheme="red"
							icon={<Icon as={HiOutlineTrash} boxSize="18px" />}
						/>
					</ButtonGroup>

					<MenuDivider />

					<MenuItem
						command="Enter"
						icon={<Image alt="open" src={RunIcon} width={18} />}
						onClick={handleAddWindow}
					>
						Open
					</MenuItem>

					<MenuItem
						icon={<Image alt="open" src={RunIcon} width={18} />}
						onClick={handleAddWindow}
					>
						Run as administrator
					</MenuItem>

					<MenuItem icon={<Icon as={FcOpenedFolder} />}>
						Open file location
					</MenuItem>

					<MenuItem icon={<Icon as={BsPinAngle} />}>
						Unpin from Start
					</MenuItem>

					<MenuItem icon={<Icon as={PiStar} color="primary" />}>
						Add to favorites
					</MenuItem>

					<MenuItem icon={<Icon as={MdOutlineFolderZip} />}>
						Compress to ZIP file
					</MenuItem>

					<MenuItem
						command="Ctrl+Shift+C"
						icon={<Icon as={VscFileSymlinkDirectory} />}
					>
						Copy as path
					</MenuItem>

					<MenuItem
						command="Alt+Enter"
						icon={<Icon as={VscSymbolProperty} />}
					>
						Properties
					</MenuItem>

					{children ? <MenuDivider /> : null}

					{typeof children === 'function'
						? children(internalProps)
						: children}
				</MenuList>
			)}
		</ContextMenu>
	);
}
