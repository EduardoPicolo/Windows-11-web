"use client";

import type {
	GroupBase,
	OptionProps,
	Props,
} from 'chakra-react-select';
import { Select } from 'chakra-react-select';

const getOptionBg =
	<
		Option = unknown,
		IsMulti extends boolean = boolean,
		Group extends GroupBase<Option> = GroupBase<Option>,
	>(
		state: OptionProps<Option, IsMulti, Group>
	) =>
	(colorMode: 'light' | 'dark') => {
		if (!state.isFocused && !state.isSelected) return 'transparent';

		switch (colorMode) {
			case 'light': {
				if (state.isSelected) return 'blue.500';
				if (state.isFocused) return 'blackAlpha.200';
				break;
			}

			case 'dark': {
				if (state.isSelected) return 'blue.400';
				if (state.isFocused) return 'whiteAlpha.50';
				break;
			}

			default: {
				return 'transparent';
			}
		}

		return 'transparent';
	};

/* eslint-disable react-perf/jsx-no-new-object-as-prop -- ignore */

type CustomSelectProps<
	Option = unknown,
	IsMulti extends boolean = boolean,
	Group extends GroupBase<Option> = GroupBase<Option>,
> = Omit<Props<Option, IsMulti, Group>, 'name' | 'defaultValue'>;

export function CustomSelect<
	Option = unknown,
	IsMulti extends boolean = boolean,
	Group extends GroupBase<Option> = GroupBase<Option>,
>(props: CustomSelectProps<Option, IsMulti, Group>) {
	const { chakraStyles } = props;

	return (
		<Select
			chakraStyles={{
				control: (provided) => ({
					...provided,
					borderRadius: 'md',
					textTransform: 'capitalize',
				}),
				container: (provided) => ({
					...provided,
					borderRadius: 'base',
					width: '100%',
					maxWidth: '100%',
				}),
				indicatorSeparator: () => ({
					display: 'none',
				}),
				dropdownIndicator: (provided) => ({
					...provided,
					px: 2,
					background: 'transparent',
					color: 'primary',
				}),
				menu: (provided) => ({
					...provided,
					backdropFilter: 'blur(20.5px)',
					background: 'transparent',
					transform: 'auto-gpu',
				}),
				menuList: (provided) => ({
					...provided,
					border: '1px solid',
					borderColor: 'var(--chakra-colors-chakra-border-color)',
					borderRadius: 'md',
					boxShadow: 'subtle',
					background: 'whiteAlpha.200',
					_dark: {
						background: 'blackAlpha.500',
					},
					backdropFilter: 'blur(20.5px)',
				}),
				option: (provided, state) => ({
					...provided,
					backgroundColor: getOptionBg(state)('light'),
					borderRadius: 0,
					_dark: {
						backgroundColor: getOptionBg(state)('dark'),
					},
				}),
				...chakraStyles,
			}}
			defaultValue={null}
			openMenuOnFocus
			{...props}
		/>
	);
}

/* eslint-enable react-perf/jsx-no-new-object-as-prop */
