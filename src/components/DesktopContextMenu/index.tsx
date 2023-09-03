import { FocusEventHandler, useCallback, useState } from 'react';
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
import { BsBrush, BsGrid } from 'react-icons/bs';
import { CgMoreR } from 'react-icons/cg';
import { RiArrowRightSLine } from 'react-icons/ri';
import { TbReload } from 'react-icons/tb';
import { AnimatePresence, motion } from 'framer-motion';

import { TerminalIcon } from '@/assets/ TerminalIcon';
import { AddIcon } from '@/assets/AddIcon';
import { DisplaySettingsIcon } from '@/assets/DisplaySettingsIcon';
import { SortIcon } from '@/assets/SortIcon';
import {
	ContextMenu,
	type ContextMenuProps,
} from '@/components/ContextMenu';

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

	return (
		<ContextMenu size="sm" {...props}>
			{({ isOpen }) => {
				if (!isOpen) submenuDisclosure.onClose();

				return (
					<>
						<MenuList>
							<MenuItem
								icon={<Icon as={BsGrid} />}
								onFocus={handleOpenSubmenu('view')}
								bg={
									submenuDisclosure.isOpen && submenu === 'view'
										? 'hoverBg'
										: undefined
								}
							>
								<HStack justifyContent="space-between">
									<Text>View</Text>
									<Icon
										as={RiArrowRightSLine}
										boxSize={4}
										mr={-1.5}
									/>
								</HStack>
							</MenuItem>

							<MenuItem
								icon={<SortIcon />}
								onFocus={handleOpenSubmenu('sortby')}
								bg={
									submenuDisclosure.isOpen && submenu === 'sortby'
										? 'hoverBg'
										: undefined
								}
							>
								<HStack justifyContent="space-between">
									<Text>Sort by</Text>
									<Icon
										as={RiArrowRightSLine}
										boxSize={4}
										mr={-1.5}
									/>
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
								icon={<AddIcon boxSize="20px" />}
								onFocus={handleOpenSubmenu('new')}
								bg={
									submenuDisclosure.isOpen && submenu === 'new'
										? 'hoverBg'
										: undefined
								}
							>
								<HStack justifyContent="space-between">
									<Text>New</Text>
									<Icon
										as={RiArrowRightSLine}
										boxSize={4}
										mr={-1.5}
									/>
								</HStack>
							</MenuItem>
							<MenuDivider />
							<MenuItem
								icon={<DisplaySettingsIcon boxSize="19px" />}
								onFocus={submenuDisclosure.onClose}
							>
								Display Settings
							</MenuItem>
							<MenuItem
								icon={<Icon as={BsBrush} />}
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
							{submenuDisclosure.isOpen && (
								<MotionDivWithStyles
									position="absolute"
									top={`${submenuPosition?.y}px`}
									left={`${submenuPosition?.x}px`}
									zIndex={3}
									initial={{ x: -20 }}
									animate={{ x: 0 }}
									exit={{ scale: 0.9 }}
									transition={{
										type: 'tween',
										ease: 'circOut',
										duration: 0.2,
									}}
									layout="position"
								>
									{submenu ? submenusMap[submenu] : null}
								</MotionDivWithStyles>
							)}
						</AnimatePresence>
					</>
				);
			}}
		</ContextMenu>
	);
}
