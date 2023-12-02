import { Heading } from '@chakra-ui/react';
import Image from 'next/image';

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
			<Image alt="system" src={SystemIcon} unoptimized width={18} />
		),
		panel: (
			<Heading fontWeight="medium" size="lg">
				System
			</Heading>
		),
	},
	{
		label: 'Bluetooth & devices',
		icon: <Image alt="bluetooth" src={BluetoothIcon} width={18} />,
		panel: (
			<Heading fontWeight="medium" size="lg">
				Bluetooth & devices
			</Heading>
		),
	},
	{
		label: 'Network & internet',
		icon: <Image alt="network" src={WifiIcon} width={18} />,
		panel: (
			<Heading fontWeight="medium" mb={8} size="lg">
				Network & internet
			</Heading>
		),
	},
	{
		label: 'Personalization',
		icon: (
			<Image
				alt="personalization"
				src={PersonalisationIcon}
				width={18}
			/>
		),
		panel: <Personalisation />,
	},
	{
		label: 'Apps',
		icon: <Image alt="apps" src={AppsIcon} width={18} />,
		panel: (
			<Heading fontWeight="medium" size="lg">
				Apps
			</Heading>
		),
	},
	{
		label: 'Accounts',
		icon: <Image alt="accounts" src={AccountsIcon} width={18} />,
		panel: (
			<Heading fontWeight="medium" size="lg">
				Accounts
			</Heading>
		),
	},
	{
		label: 'Time & language',
		icon: <Image alt="time" src={TimeIcon} width={18} />,
		panel: (
			<Heading fontWeight="medium" size="lg">
				Time & language
			</Heading>
		),
	},
	{
		label: 'Gaming',
		icon: <Image alt="gaming" src={GamingIcon} width={18} />,
		panel: (
			<Heading fontWeight="medium" size="lg">
				Gaming
			</Heading>
		),
	},
	{
		label: 'Accessibility',
		icon: (
			<Image alt="accessibility" src={AccessibilityIcon} width={18} />
		),
		panel: (
			<Heading fontWeight="medium" size="lg">
				Accessibility
			</Heading>
		),
	},
	{
		label: 'Privacy & security',
		icon: <Image alt="privacy" src={PrivacyIcon} width={18} />,
		panel: (
			<Heading fontWeight="medium" size="lg">
				Privacy & security
			</Heading>
		),
	},
	{
		label: 'Windows Update',
		icon: <Image alt="update" src={UpdateIcon} width={18} />,
		panel: (
			<Heading fontWeight="medium" size="lg">
				Windows Update
			</Heading>
		),
	},
];
