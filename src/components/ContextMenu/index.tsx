import { useRef } from 'react';
import type { MenuProps } from '@chakra-ui/react';
import { Box, Menu, Portal } from '@chakra-ui/react';

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
				display={rest.isOpen ? 'block' : 'none'}
				h={0}
				hidden={rest.isOpen === false}
				left={position.x}
				position="absolute"
				ref={menuRef}
				top={position.y}
				w={0}
			>
				<Menu
					computePositionOnMount
					size="sm"
					/**
					 * Fix menu closing on auxclick. It should only reposition
					 * itself.
					 */
					closeOnBlur={false}
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
