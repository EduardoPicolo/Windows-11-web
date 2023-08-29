import { useCallback } from 'react';
import {
	Center,
	CenterProps,
	forwardRef,
	Text,
	useColorModeValue,
	useStyleConfig,
} from '@chakra-ui/react';

import { useWindows } from '@/contexts/Windows';

interface DesktopIconProps extends ExecutableIconProps, CenterProps {}

export const DesktopIcon = forwardRef<DesktopIconProps, 'div'>(
	(props, ref) => {
		const { app, ...rest } = props;

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
			<Center
				className="desktop-icon"
				ref={ref}
				__css={styles}
				onDoubleClick={handleAddWindow}
				{...rest}
			>
				<Center
					w="55px"
					position="relative"
					userSelect="none"
					unselectable="on"
					pointerEvents="none"
					draggable={false}
				>
					{app.icon}
				</Center>

				<Text
					noOfLines={2}
					textTransform="capitalize"
					textShadow={textShadow}
				>
					{app.fullName}
				</Text>
			</Center>
		);
	}
);
