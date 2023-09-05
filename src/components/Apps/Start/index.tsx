import { useRef } from 'react';
import {
	chakra,
	Portal,
	useDisclosure,
	useOutsideClick,
} from '@chakra-ui/react';
import { AnimatePresence, motion } from 'framer-motion';

import { StartMenu } from '@/components/StartMenu';
import { TaskbarIcon } from '@/components/TaskbarIcon';
import { ThemeImage } from '@/components/ThemeImage';
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
			if (anchorEl?.contains(event?.target as Node)) return;
			onClose();
		},
	});

	return (
		<Portal appendToParentPortal={false}>
			<AnimatePresence>
				{isOpen && (
					<MotionDivWithStyles
						position="absolute"
						left={anchorEl?.offsetLeft ? anchorEl.offsetLeft - 50 : 0}
						bottom={0}
						initial={{ y: '75%' }}
						animate={{ y: -60 }}
						exit={{ y: '100%' }}
						// eslint-disable-next-line react-perf/jsx-no-new-object-as-prop -- ignore
						transition={{
							type: 'tween',
							duration: 0.3,
							ease: 'circOut',
						}}
						zIndex={2}
					>
						<StartMenu ref={menuRef} />
					</MotionDivWithStyles>
				)}
			</AnimatePresence>
		</Portal>
	);
}

const startMenuButton: App = {
	shortName: 'Start',
	icon: (
		<ThemeImage
			srcLight={StartIconLight}
			srcDark={StartIconDark}
			alt="start"
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
				ref={ref}
				app={startMenuButton}
				onClick={onToggle}
			/>

			{ref.current && (
				<StartMenuContainer
					isOpen={isOpen}
					onClose={onClose}
					anchorEl={ref.current}
				/>
			)}
		</>
	);
}
