import Image from 'next/image';
import { Heading, HStack } from '@chakra-ui/react';

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
			<Image src={SystemIcon} alt="system" width={20} unoptimized />
		),
		panel: (
			<Heading size="lg" fontWeight="semibold">
				System
			</Heading>
		),
	},
	{
		label: 'Bluetooth & devices',
		icon: <Image src={BluetoothIcon} alt="bluetooth" width={20} />,
		panel: (
			<Heading size="lg" fontWeight="semibold">
				Bluetooth & devices
			</Heading>
		),
	},
	{
		label: 'Network & internet',
		icon: <Image src={WifiIcon} alt="network" width={20} />,
		panel: (
			<Heading size="lg" fontWeight="semibold">
				Network & internet
			</Heading>
		),
	},
	{
		label: 'Personalization',
		icon: (
			<Image
				src={PersonalisationIcon}
				alt="personalization"
				width={20}
			/>
		),
		panel: (
			<HStack>
				<Heading size="lg" fontWeight="semibold" color="gray.500">
					Personalization &gt;
				</Heading>
				<Heading size="lg" fontWeight="semibold">
					Background
				</Heading>
			</HStack>
		),
	},
	{
		label: 'Apps',
		icon: <Image src={AppsIcon} alt="apps" width={20} />,
	},
	{
		label: 'Accounts',
		icon: <Image src={AccountsIcon} alt="accounts" width={20} />,
	},
	{
		label: 'Time & language',
		icon: <Image src={TimeIcon} alt="time" width={20} />,
	},
	{
		label: 'Gaming',
		icon: <Image src={GamingIcon} alt="gaming" width={20} />,
	},
	{
		label: 'Accessibility',
		icon: (
			<Image src={AccessibilityIcon} alt="accessibility" width={20} />
		),
	},
	{
		label: 'Privacy & security',
		icon: <Image src={PrivacyIcon} alt="privacy" width={20} />,
	},
	{
		label: 'Windows Update',
		icon: <Image src={UpdateIcon} alt="update" width={20} />,
	},
];
