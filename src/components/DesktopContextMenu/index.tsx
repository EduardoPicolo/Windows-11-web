import {
	MouseEventHandler,
	useCallback,
	useLayoutEffect,
	useState,
} from 'react';
import {
	HStack,
	Icon,
	MenuDivider,
	MenuItem,
	MenuList,
	Portal,
	Text,
	useDisclosure,
} from '@chakra-ui/react';
import { BsBrush, BsGrid } from 'react-icons/bs';
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
import { ViewSubmenu } from '@/components/DesktopContextMenu/ViewSubmenu';

type DesktopContextMenuProps = Omit<ContextMenuProps, 'children'>;

export function DesktopContextMenu(props: DesktopContextMenuProps) {
	const submenuDisclosure = useDisclosure();

	useLayoutEffect(() => {
		/** Close submenu on auxclick */
		const handleClick = () => {
			submenuDisclosure.onClose();
		};

		document.addEventListener('auxclick', handleClick);

		return () => {
			document.removeEventListener('auxclick', handleClick);
		};
	}, []);

	const [submenuPosition, setSubmenuPosition] = useState({
		x: 0,
		y: 0,
	});

	const handleOpenSubmenu = useCallback<
		MouseEventHandler<HTMLButtonElement>
	>(
		(event) => {
			submenuDisclosure.onOpen();
			setSubmenuPosition({
				x:
					event.currentTarget.getBoundingClientRect().x +
					event.currentTarget.getBoundingClientRect().width -
					1,
				y: event.currentTarget.getBoundingClientRect().y,
			});
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
								onMouseEnter={handleOpenSubmenu}
								bg={submenuDisclosure.isOpen ? 'hoverBg' : undefined}
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
								onMouseEnter={handleOpenSubmenu}
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
								onMouseEnter={submenuDisclosure.onClose}
							>
								Refresh
							</MenuItem>
							<MenuDivider />
							<MenuItem
								icon={<AddIcon boxSize="20px" />}
								onMouseEnter={handleOpenSubmenu}
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
								onMouseEnter={submenuDisclosure.onClose}
							>
								Display Settings
							</MenuItem>
							<MenuItem
								icon={<Icon as={BsBrush} />}
								onMouseEnter={submenuDisclosure.onClose}
							>
								Personalize
							</MenuItem>
							<MenuDivider />
							<MenuItem
								icon={<TerminalIcon />}
								onMouseEnter={submenuDisclosure.onClose}
							>
								Open in Terminal
							</MenuItem>
							<MenuDivider />
							<MenuItem onMouseEnter={submenuDisclosure.onClose}>
								Show more options
							</MenuItem>
						</MenuList>

						<Portal appendToParentPortal={false}>
							<AnimatePresence>
								{submenuDisclosure.isOpen && (
									<motion.div
										style={{
											position: 'absolute',
											top: submenuPosition?.y,
											left: submenuPosition?.x,
											zIndex: 12,
										}}
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
										<ViewSubmenu />
									</motion.div>
								)}
							</AnimatePresence>
						</Portal>
					</>
				);
			}}
		</ContextMenu>
	);
}
