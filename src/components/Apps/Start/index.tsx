import { useRef } from 'react';
import {
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

export function StartApp() {
	const { isOpen, onClose, onToggle } = useDisclosure();

	const ref = useRef<HTMLButtonElement>(null);

	const menuRef = useRef<HTMLDivElement>(null);

	useOutsideClick({
		ref: menuRef,
		handler: (event) => {
			if (ref.current?.contains(event.target as Node)) return;
			onClose();
		},
	});

	return (
		<>
			<TaskbarIcon
				ref={ref}
				icon={
					<ThemeImage
						srcLight={StartIconLight}
						srcDark={StartIconDark}
						alt="search"
					/>
				}
				name="Start"
				onClick={onToggle}
			/>

			<Portal>
				<AnimatePresence>
					{isOpen && (
						<motion.div
							initial={{ y: '50%' }}
							animate={{ y: -66 }}
							exit={{ y: '100%' }}
							transition={{
								type: 'keyframes',
								ease: 'circOut',

								// duration: 1,
							}}
							style={{
								position: 'absolute',
								left: ref.current?.offsetLeft - 60,
								bottom: 0,
							}}
						>
							<StartMenu ref={menuRef} />
						</motion.div>
					)}
				</AnimatePresence>
			</Portal>
		</>
	);
}
