import { MenuItem, MenuList } from '@chakra-ui/react';

export function SortbySubmenu() {
	return (
		<MenuList>
			<MenuItem>Name</MenuItem>
			<MenuItem>Size</MenuItem>
			<MenuItem>Item type</MenuItem>
			<MenuItem>Date modified</MenuItem>
		</MenuList>
	);
}
