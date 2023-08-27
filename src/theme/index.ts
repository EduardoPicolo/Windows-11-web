import {
	extendTheme,
	withDefaultColorScheme,
} from '@chakra-ui/react';

import { buttonTheme as Button } from './components/button';
import { cardTheme as Card } from './components/card';
import { checkboxTheme as Checkbox } from './components/checkbox';
import { dividerTheme as Divider } from './components/divider';
import { formTheme as Form } from './components/form';
import {
	formLabelTheme as FormLabel,
	inputTheme as Input,
} from './components/input';
import { loadingTheme as Loading } from './components/loading';
import { menuTheme as Menu } from './components/menu';
import { numberInputTheme as NumberInput } from './components/numberInput';
import { popoverTheme as Popover } from './components/popover';
import { sidebarTheme as Sidebar } from './components/sidebar';
import { tabsTheme as Tabs } from './components/tabs';
import { taskbarTheme as Taskbar } from './components/taskbar';
import { tooltipTheme as Tooltip } from './components/tooltip';
import { breakpoints } from './foundations/breakpoints';
import { colors } from './foundations/colors';
import { fonts, fontSizes } from './foundations/fonts';
import { semanticTokens } from './foundations/semanticTokens';
import { shadows } from './foundations/shadows';
import { styles } from './styles';

/**
 * Run 'yarn theme' to generate types, or 'yarn theme:watch' to
 * generate types on file change. This is required for the custom
 * theme keys to work with TypeScript. See
 * https://chakra-ui.com/docs/styled-system/cli
 *
 * If using VSCode, you may also need to restart the TS server after
 * running the command.
 */
const overrides = {
	fonts,
	fontSizes,
	colors,
	shadows,
	breakpoints,
	styles,

	components: {
		Button,
		Card,
		Divider,
		Tabs,
		Form,
		Sidebar,
		Input,
		FormLabel,
		Checkbox,
		Popover,
		Menu,
		Loading,
		Tooltip,
		NumberInput,
		Taskbar,
	},
	semanticTokens,
	config: {
		initialColorMode: 'light',
	},
};

export const theme = extendTheme(
	overrides,
	withDefaultColorScheme({ colorScheme: 'blue' })
	// withDefaultProps()
	// withDefaultSize(),
	// withDefaultVariant(),
);
