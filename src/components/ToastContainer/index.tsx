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
			position="bottom-center"
			autoClose={5000}
			hideProgressBar={false}
			newestOnTop
			closeOnClick
			pauseOnFocusLoss
			draggable
			pauseOnHover
			theme={colorMode}
			transition={Zoom}
			{...props}
		/>
	);
}
