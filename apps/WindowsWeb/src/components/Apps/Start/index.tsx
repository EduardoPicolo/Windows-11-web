import {
	chakra,
	Portal,
	useDisclosure,
	useOutsideClick,
} from '@chakra-ui/react';
import { TaskbarIcon, ThemeImage } from '@repo/ui/components';
import { AnimatePresence, motion } from 'framer-motion';
import { useRef } from 'react';

import { StartMenu } from '@/components/StartMenu';
import StartIconDark from '@/public/icons/Start_Dark.png';
import StartIconLight from '@/public/icons/Start_Light.png';

const MotionDivWithStyles = motion(chakra.div);

interface StartMenuContainerProps {
	isOpen: boolean;
	onClose: () => void;
	anchorEl: HTMLElement;
}

export function StartMenuContainer({
	isOpen,
	onClose,
	anchorEl,
}: StartMenuContainerProps) {
	const menuRef = useRef<HTMLDivElement>(null);

	useOutsideClick({
		ref: menuRef,
		handler: (event) => {
			if (anchorEl.contains(event.target as Node)) return;
			onClose();
		},
	});

	return (
		<Portal appendToParentPortal={false}>
			<AnimatePresence>
				{isOpen ? (
					<MotionDivWithStyles
						animate={{ y: -60 }}
						bottom={0}
						initial={{ y: '75%' }}
						left={anchorEl.offsetLeft ? anchorEl.offsetLeft - 50 : 0}
						position="absolute"
						zIndex={2}
						exit={{ y: '100%' }}
						// eslint-disable-next-line react-perf/jsx-no-new-object-as-prop -- ignore
						transition={{
							type: 'tween',
							duration: 0.3,
							ease: 'circOut',
						}}
					>
						<StartMenu onClose={onClose} ref={menuRef} />
					</MotionDivWithStyles>
				) : null}
			</AnimatePresence>
		</Portal>
	);
}

const startMenuButton: App = {
	shortName: 'Start',
	icon: (
		<ThemeImage
			alt="start"
			srcDark={StartIconDark}
			srcLight={StartIconLight}
		/>
	),
	Window: null,
} as App;

export function StartApp() {
	const { isOpen, onClose, onToggle } = useDisclosure();

	const ref = useRef<HTMLButtonElement>(null);

	return (
		<>
			<TaskbarIcon
				app={startMenuButton}
				onClick={onToggle}
				ref={ref}
			/>

			{ref.current ? (
				<StartMenuContainer
					anchorEl={ref.current}
					isOpen={isOpen}
					onClose={onClose}
				/>
			) : null}
		</>
	);
}
