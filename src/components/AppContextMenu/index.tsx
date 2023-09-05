import Image from 'next/image';
import { MouseEventHandler, useCallback } from 'react';
import {
	ButtonGroup,
	Icon,
	IconButton,
	MenuDivider,
	MenuItem,
	MenuList,
} from '@chakra-ui/react';
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

import {
	ContextMenu,
	ContextMenuProps,
} from '@/components/ContextMenu';
import { useWindows } from '@/contexts/Windows';
import RunIcon from '@/public/icons/run.png';

type AppContextMenuProps = Omit<ContextMenuProps, 'children'> & {
	app: App;
	children?: ContextMenuProps['children'];
};

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
					<ButtonGroup variant="ghost" colorScheme="gray" spacing={1}>
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
							icon={<Icon as={HiOutlineTrash} boxSize="18px" />}
							colorScheme="red"
						/>
					</ButtonGroup>

					<MenuDivider />

					<MenuItem
						icon={<Image src={RunIcon} alt="open" width={18} />}
						onClick={handleAddWindow}
						command="Enter"
					>
						Open
					</MenuItem>

					<MenuItem
						icon={<Image src={RunIcon} alt="open" width={18} />}
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
						icon={<Icon as={VscFileSymlinkDirectory} />}
						command="Ctrl+Shift+C"
					>
						Copy as path
					</MenuItem>

					<MenuItem
						icon={<Icon as={VscSymbolProperty} />}
						command="Alt+Enter"
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
