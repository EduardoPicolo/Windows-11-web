import {
	chakra,
	forwardRef,
	type HTMLChakraProps,
	type ThemingProps,
	useStyleConfig,
} from '@chakra-ui/react';

interface LoadingSpinnerProps
	extends HTMLChakraProps<'span'>,
		ThemingProps<'CircularProgress'> {}

/**
 * `Loader`
 *
 * Simple loading spinner component.
 */
// export const Loader = forwardRef<LoadingSpinnerProps, 'span'>(
// 	(props, ref) => {
// 		const { size, variant, colorScheme, ...rest } = props;
// 		const styles = useStyleConfig('Loading', {
// 			size,
// 			variant,
// 			colorScheme,
// 		});

// 		return <chakra.span __css={styles} ref={ref} {...rest} />;
// 	}
// );

export const Loader =
	(props: LoadingSpinnerProps) => {
		const { size, variant, colorScheme, ...rest } = props;
		const styles = useStyleConfig('Loading', {
			size,
			variant,
			colorScheme,
		});

		return <chakra.span __css={styles}  {...rest} />;
	}
