import { useRef } from 'react';
import { Box, Menu, MenuProps, Portal } from '@chakra-ui/react';

import { useEventListener } from '@/hooks/useEventListener';

export type ContextMenuProps = MenuProps & {
	position: {
		x: number | string;
		y: number | string;
	};
};

export function ContextMenu(props: ContextMenuProps) {
	const { position, children, ...rest } = props;

	const menuRef = useRef<HTMLDivElement>(null);

	useEventListener('click', (event) => {
		if (
			menuRef.current &&
			menuRef.current.contains(event.target as Node)
		) {
			console.log('Clicked inside menu, not closing.');

			return;
		}

		rest.onClose?.();
	});

	return (
		<Portal appendToParentPortal={false}>
			<Box
				ref={menuRef}
				position="absolute"
				left={position.x}
				top={position.y}
				hidden={rest.isOpen === false}
				display={rest.isOpen ? 'block' : 'none'}
				w={0}
				h={0}
			>
				<Menu
					size="sm"
					/**
					 * Fix menu closing on auxclick. It should only reposition
					 * itself.
					 */
					closeOnBlur={false}
					computePositionOnMount
					{...rest}
				>
					{(internalProps) =>
						typeof children === 'function'
							? children(internalProps)
							: children
					}
				</Menu>
			</Box>
		</Portal>
	);
}
