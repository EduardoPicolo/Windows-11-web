import { useColorMode } from '@chakra-ui/react';
import {
	ToastContainer,
	type ToastContainerProps,
	Zoom,
} from 'react-toastify';

export function CustomToastContainer(props: ToastContainerProps) {
	const { colorMode } = useColorMode();

	return (
		<ToastContainer
			autoClose={5000}
			closeOnClick
			draggable
			hideProgressBar={false}
			newestOnTop
			pauseOnFocusLoss
			pauseOnHover
			position="bottom-center"
			theme={colorMode}
			transition={Zoom}
			{...props}
		/>
	);
}
