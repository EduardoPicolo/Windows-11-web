import { useCallback, useLayoutEffect, useState } from 'react';
import {
	chakra,
	HStack,
	Icon,
	MenuDivider,
	MenuItem,
	MenuList,
	Text,
	useDisclosure,
} from '@chakra-ui/react';
import type { FocusEventHandler } from 'react';
import { BsBrush, BsGrid } from 'react-icons/bs';
import { CgMoreR } from 'react-icons/cg';
import { RiArrowRightSLine } from 'react-icons/ri';
import { TbReload } from 'react-icons/tb';
import { AnimatePresence, motion } from 'framer-motion';

import { TerminalIcon } from '@/assets/ TerminalIcon';
import { AddIcon } from '@/assets/AddIcon';
import { DisplaySettingsIcon } from '@/assets/DisplaySettingsIcon';
import { SortIcon } from '@/assets/SortIcon';
import { SettingsApp } from '@/components/Apps/apps';
import {
	ContextMenu,
	type ContextMenuProps,
} from '@/components/ContextMenu';
import { useWindows } from '@/contexts/Windows';

import { NewSubmenu } from './NewSubmenu';
import { SortbySubmenu } from './SortbySubmenu';
import { ViewSubmenu } from './ViewSubmenu';

const MotionDivWithStyles = motion(chakra.div);

const submenusMap = {
	view: <ViewSubmenu />,
	sortby: <SortbySubmenu />,
	new: <NewSubmenu />,
};

type Submenu = keyof typeof submenusMap;

type DesktopContextMenuProps = Omit<ContextMenuProps, 'children'>;

export function DesktopContextMenu(props: DesktopContextMenuProps) {
	const { isOpen } = props;

	const { addWindow } = useWindows();

	const submenuDisclosure = useDisclosure();

	const [submenu, setSubmenu] = useState<Submenu | null>(null);
	const [submenuPosition, setSubmenuPosition] = useState({
		x: 0,
		y: 0,
	});

	const handleOpenSubmenu = useCallback(
		(menu: Submenu): FocusEventHandler<HTMLButtonElement> =>
			(event) => {
				setSubmenu(menu);
				setSubmenuPosition({
					x: event.currentTarget.getBoundingClientRect().width + 4,
					y: event.currentTarget.offsetTop,
				});
				submenuDisclosure.onOpen();
			},
		[submenuDisclosure]
	);

	useLayoutEffect(() => {
		if (!isOpen) submenuDisclosure.onClose();
		// eslint-disable-next-line react-hooks/exhaustive-deps -- Only when isOpen changes
	}, [isOpen]);

	const handleAddWindow = useCallback(
		(app: App) => () => {
			addWindow(app);
		},
		[addWindow]
	);

	return (
		<ContextMenu size="sm" {...props}>
			<MenuList>
				<MenuItem
					bg={
						submenuDisclosure.isOpen && submenu === 'view'
							? 'hoverBg'
							: undefined
					}
					icon={<Icon as={BsGrid} />}
					onFocus={handleOpenSubmenu('view')}
				>
					<HStack justifyContent="space-between">
						<Text>View</Text>
						<Icon as={RiArrowRightSLine} boxSize={4} mr={-1.5} />
					</HStack>
				</MenuItem>

				<MenuItem
					bg={
						submenuDisclosure.isOpen && submenu === 'sortby'
							? 'hoverBg'
							: undefined
					}
					icon={<SortIcon />}
					onFocus={handleOpenSubmenu('sortby')}
				>
					<HStack justifyContent="space-between">
						<Text>Sort by</Text>
						<Icon as={RiArrowRightSLine} boxSize={4} mr={-1.5} />
					</HStack>
				</MenuItem>
				<MenuItem
					icon={<Icon as={TbReload} />}
					onFocus={submenuDisclosure.onClose}
				>
					Refresh
				</MenuItem>
				<MenuDivider />
				<MenuItem
					bg={
						submenuDisclosure.isOpen && submenu === 'new'
							? 'hoverBg'
							: undefined
					}
					icon={<AddIcon boxSize="20px" />}
					onFocus={handleOpenSubmenu('new')}
				>
					<HStack justifyContent="space-between">
						<Text>New</Text>
						<Icon as={RiArrowRightSLine} boxSize={4} mr={-1.5} />
					</HStack>
				</MenuItem>
				<MenuDivider />
				<MenuItem
					icon={<DisplaySettingsIcon boxSize="19px" />}
					onClick={handleAddWindow(SettingsApp)}
					onFocus={submenuDisclosure.onClose}
				>
					Display Settings
				</MenuItem>
				<MenuItem
					icon={<Icon as={BsBrush} />}
					onClick={handleAddWindow(SettingsApp)}
					onFocus={submenuDisclosure.onClose}
				>
					Personalize
				</MenuItem>
				<MenuDivider />
				<MenuItem
					icon={<TerminalIcon />}
					onFocus={submenuDisclosure.onClose}
				>
					Open in Terminal
				</MenuItem>
				<MenuDivider />
				<MenuItem
					icon={
						<Icon
							as={CgMoreR}
							sx={{
								'& path:nth-child(-n+3)': {
									fill: 'blue.400',
								},
							}}
						/>
					}
					onFocus={submenuDisclosure.onClose}
				>
					Show more options
				</MenuItem>
			</MenuList>

			<AnimatePresence>
				{submenuDisclosure.isOpen ? (
					<MotionDivWithStyles
						animate={{ x: 0 }}
						exit={{ scale: 0.9 }}
						initial={{ x: -20 }}
						layout="position"
						left={`${submenuPosition.x}px`}
						position="absolute"
						top={`${submenuPosition.y}px`}
						transition={{
							type: 'tween',
							ease: 'circOut',
							duration: 0.2,
						}}
						zIndex={3}
					>
						{submenu ? submenusMap[submenu] : null}
					</MotionDivWithStyles>
				) : null}
			</AnimatePresence>
		</ContextMenu>
	);
}
