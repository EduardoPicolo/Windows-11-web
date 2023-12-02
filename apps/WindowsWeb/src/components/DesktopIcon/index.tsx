import { useCallback } from 'react';
import type { BoxProps, CenterProps } from '@chakra-ui/react';
import {
	Box,
	forwardRef,
	Text,
	useStyleConfig,
} from '@chakra-ui/react';

import { useWindows } from '@/contexts/Windows';

interface DesktopIconProps extends ExecutableIconProps, CenterProps {
	iconSize?: BoxProps['boxSize'];
}

export const DesktopIcon = forwardRef<DesktopIconProps, 'div'>(
	(props, ref) => {
		const { app, children, ...rest } = props;

		const styles = useStyleConfig('DesktopIcon');

		const { addWindow } = useWindows();

		const handleAddWindow = useCallback(() => {
			addWindow(app);
		}, [app, addWindow]);

		return (
			<Box
				__css={styles}
				className="desktop-icon"
				onDoubleClick={handleAddWindow}
				ref={ref}
				{...rest}
			>
				<Box
					boxSize={props.iconSize ?? '60px'}
					draggable={false}
					margin="0 auto"
					pointerEvents="none"
					unselectable="on"
					userSelect="none"
				>
					{app.icon}
				</Box>

				<Text noOfLines={2}>{children ?? app.fullName}</Text>
			</Box>
		);
	}
);
