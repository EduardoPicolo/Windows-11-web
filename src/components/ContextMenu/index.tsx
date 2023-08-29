import { useLayoutEffect } from 'react';
import {
	Box,
	Menu,
	MenuItem,
	MenuList,
	MenuProps,
	Portal,
} from '@chakra-ui/react';

type ContextMenuProps = MenuProps & {
	position: {
		x: number;
		y: number;
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
		<Portal>
			{isOpen && (
				<Box position="absolute" left={position.x} top={position.y}>
					<Menu isOpen closeOnBlur={false} {...rest}>
						{(internalProps) => (
							<MenuList>
								{children ? (
									typeof children === 'function' ? (
										children(internalProps)
									) : (
										children
									)
								) : (
									<MenuItem isDisabled>No options</MenuItem>
								)}
							</MenuList>
						)}
					</Menu>
				</Box>
			)}
		</Portal>
	);
}
