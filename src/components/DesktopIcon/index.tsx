import { useCallback } from 'react';
import {
	Box,
	BoxProps,
	CenterProps,
	forwardRef,
	Text,
	useColorModeValue,
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

		const textShadow = useColorModeValue(
			'none',
			'1px 1px 0px #111, 1px 1px 1px #222'
		);

		const handleAddWindow = useCallback(() => {
			addWindow(app);
		}, [app, addWindow]);

		return (
			<Box
				className="desktop-icon"
				ref={ref}
				__css={styles}
				onDoubleClick={handleAddWindow}
				{...rest}
			>
				<Box
					boxSize={props.iconSize ?? '55px'}
					margin="0 auto"
					userSelect="none"
					unselectable="on"
					pointerEvents="none"
					draggable={false}
				>
					{app.icon}
				</Box>

				<Text
					noOfLines={2}
					textTransform="capitalize"
					textShadow={textShadow}
				>
					{children ?? app.fullName}
				</Text>
			</Box>
		);
	}
);
