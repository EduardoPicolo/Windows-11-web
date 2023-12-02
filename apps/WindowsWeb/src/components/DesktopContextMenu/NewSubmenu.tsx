import { MenuItem, MenuList } from '@chakra-ui/react';

export function NewSubmenu() {
	return (
		<MenuList>
			<MenuItem>Folder</MenuItem>
			<MenuItem>Shortcut</MenuItem>
			<MenuItem>Bitmap image</MenuItem>
			<MenuItem>Text Document</MenuItem>
			<MenuItem>Compressed (zipped) Folder</MenuItem>
		</MenuList>
	);
}
