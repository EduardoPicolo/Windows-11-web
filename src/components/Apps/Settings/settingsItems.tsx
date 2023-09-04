import Image from 'next/image';
import { Box, Heading } from '@chakra-ui/react';
import { motion } from 'framer-motion';

import { Personalisation } from '@/components/Apps/Settings/Personalization';
import AccessibilityIcon from '@/public/icons/Accessibility.webp';
import AccountsIcon from '@/public/icons/Accounts.webp';
import AppsIcon from '@/public/icons/Apps.webp';
import BluetoothIcon from '@/public/icons/Bluetooth.webp';
import GamingIcon from '@/public/icons/Gaming.webp';
import PersonalisationIcon from '@/public/icons/Personalisation.webp';
import PrivacyIcon from '@/public/icons/Privacy.webp';
import SystemIcon from '@/public/icons/System.webp';
import TimeIcon from '@/public/icons/Time.webp';
import WifiIcon from '@/public/icons/wifi.webp';
import UpdateIcon from '@/public/icons/WindowsUpdate.webp';

export const settingsItems = [
	{
		label: 'System',
		icon: (
			<Image src={SystemIcon} alt="system" width={18} unoptimized />
		),
		panel: (
			<Heading size="lg" fontWeight="semibold">
				System
			</Heading>
		),
	},
	{
		label: 'Bluetooth & devices',
		icon: <Image src={BluetoothIcon} alt="bluetooth" width={18} />,
		panel: (
			<Heading size="lg" fontWeight="semibold">
				Bluetooth & devices
			</Heading>
		),
	},
	{
		label: 'Network & internet',
		icon: <Image src={WifiIcon} alt="network" width={18} />,
		panel: (
			<Box>
				<Heading size="lg" fontWeight="semibold" mb={8}>
					Network & internet
				</Heading>
				<motion.div
					initial={{
						y: 100,
						opacity: 0.3,
					}}
					animate={{ y: 0, opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{
						duration: 0.3,
						ease: 'circOut',
					}}
				>
					<Box w="300px" height="200px" bg="blue.300" />
				</motion.div>
			</Box>
		),
	},
	{
		label: 'Personalization',
		icon: (
			<Image
				src={PersonalisationIcon}
				alt="personalization"
				width={18}
			/>
		),
		panel: <Personalisation />,
	},
	{
		label: 'Apps',
		icon: <Image src={AppsIcon} alt="apps" width={18} />,
	},
	{
		label: 'Accounts',
		icon: <Image src={AccountsIcon} alt="accounts" width={18} />,
	},
	{
		label: 'Time & language',
		icon: <Image src={TimeIcon} alt="time" width={18} />,
	},
	{
		label: 'Gaming',
		icon: <Image src={GamingIcon} alt="gaming" width={18} />,
	},
	{
		label: 'Accessibility',
		icon: (
			<Image src={AccessibilityIcon} alt="accessibility" width={18} />
		),
	},
	{
		label: 'Privacy & security',
		icon: <Image src={PrivacyIcon} alt="privacy" width={18} />,
	},
	{
		label: 'Windows Update',
		icon: <Image src={UpdateIcon} alt="update" width={18} />,
	},
];
