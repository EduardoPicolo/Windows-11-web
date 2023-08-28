import { useCallback } from 'react';
import {
	Center,
	CenterProps,
	forwardRef,
	Text,
} from '@chakra-ui/react';

import { useWindows } from '@/contexts/Windows';

interface DesktopIconProps extends ExecutableIconProps, CenterProps {}

export const DesktopIcon = forwardRef<DesktopIconProps, 'div'>(
	(props, ref) => {
		const { app, ...rest } = props;

		const { onAddWindow } = useWindows();

		const handleAddWindow = useCallback(() => {
			onAddWindow(app);
		}, [app, onAddWindow]);

		return (
			<Center
				ref={ref}
				position="relative"
				flexDirection="column"
				height="fit-content"
				padding={2}
				fontSize="sm"
				_hover={{
					background: 'hoverBg',
				}}
				onDoubleClick={handleAddWindow}
				sx={{
					'&.ds-selected': {
						_before: {
							content: '""',
							position: 'absolute',
							top: 0,
							left: 0,
							right: 0,
							bottom: 0,
							borderRadius: 'md',
							background: 'blue.500',
							opacity: 0.33,
							zIndex: -1,
						},
					},
				}}
				{...rest}
			>
				{app.icon}
				<Text
					maxWidth="70px"
					noOfLines={2}
					textTransform="capitalize"
					textShadow="1px 1px 0px #111, 1px 1px 1px #222"
				>
					{app.fullName}
				</Text>
			</Center>
		);
	}
);
