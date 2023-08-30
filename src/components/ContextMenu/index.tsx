import { useLayoutEffect } from 'react';
import {
	Box,
	Menu,
	MenuItem,
	MenuList,
	MenuProps,
	Portal,
} from '@chakra-ui/react';

export type ContextMenuProps = MenuProps & {
	position: {
		x: number | string;
		y: number | string;
	};
};

export function ContextMenu(props: ContextMenuProps) {
	const { position, children, isOpen, onClose, ...rest } = props;

	useLayoutEffect(() => {
		/** Close menu on click outside of menu. */
		const handleClick = () => {
			onClose?.();
		};

		document.addEventListener('click', handleClick);

		return () => {
			document.removeEventListener('click', handleClick);
		};
	}, []);

	return (
		<Portal appendToParentPortal={false}>
			<Box position="absolute" left={position.x} top={position.y}>
				<Menu
					isOpen={isOpen}
					/** Don't close menu on aux click */
					closeOnBlur={false}
					{...rest}
				>
					{(internalProps) =>
						children ? (
							typeof children === 'function' ? (
								children(internalProps)
							) : (
								children
							)
						) : (
							<MenuList>
								<MenuItem isDisabled>No options</MenuItem>
							</MenuList>
						)
					}
				</Menu>
			</Box>
		</Portal>
	);
}
