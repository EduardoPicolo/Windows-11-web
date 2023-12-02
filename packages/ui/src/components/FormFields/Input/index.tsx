"use client";

import type {
	InputAddonProps,
	InputElementProps,
	InputProps as ChakraInputProps,
} from '@chakra-ui/react';
import {
	FormControl,
	FormErrorMessage,
	FormHelperText,
	FormLabel,
	forwardRef,
	Input as ChakraInput,
	InputGroup,
} from '@chakra-ui/react';
import type { ReactElement, ReactNode } from 'react';
import type { FieldError } from 'react-hook-form';

export interface InputProps extends ChakraInputProps {
	label?: ReactNode;
	/**
	 * React Hook Form error object or object containing the error
	 * message.
	 *
	 * @example
	 * 	const {
	 * 		formState: { errors },
	 * 	} = useForm<{ password: string }>();
	 * 	<Input errors={errors?.password} />;
	 */
	errors?: FieldError | undefined;
	helperText?: string;
	rightElement?: ReactElement<InputElementProps>;
	leftElement?: ReactElement<InputElementProps>;
	rightAddon?: ReactElement<InputAddonProps>;
	leftAddon?: ReactElement<InputAddonProps>;
}

/**
 * `Input` is used to create a input field.
 *
 * This component is a wrapper for the
 * {@link ChakraInput Chakra's Input} component.
 *
 * Renders an {@link ChakraInput} field with a {@link FormControl},
 * {@link FormLabel}, {@link InputGroup} and a {@link FormErrorMessage}.
 *
 * Also supports Chakra's InputAddon & InputElement.
 *
 * @see Docs https://chakra-ui.com/docs/components/input/usage#add-elements-inside-input
 */
export const Input = forwardRef<InputProps, 'input'>((props, ref) => {
	const {
		label,
		errors,
		helperText,
		rightElement,
		leftElement,
		rightAddon,
		leftAddon,
		as,
		onClick,
		...rest
	} = props;

	return (
		<FormControl
			isInvalid={Boolean(errors)}
			onClick={onClick}
			{...rest}
		>
			{label ? (
				<FormLabel textTransform="capitalize">{label}</FormLabel>
			) : null}

			<InputGroup size={props.size}>
				{leftAddon ?? null}
				{leftElement ?? null}
				<ChakraInput as={as} ref={ref} {...rest} />
				{rightAddon ?? null}
				{rightElement ?? null}
			</InputGroup>

			{helperText ? (
				<FormHelperText>{helperText}</FormHelperText>
			) : null}
			<FormErrorMessage color="red.300">
				{errors?.message}
			</FormErrorMessage>
		</FormControl>
	);
});
