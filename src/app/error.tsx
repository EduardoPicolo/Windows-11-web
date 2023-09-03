'use client';

import { useEffect } from 'react';

import { BlueScreen } from '@/components/BlueScreen';

export default function Error({
	error,
	reset,
}: {
	error: Error;
	reset: () => void;
}) {
	useEffect(() => {
		console.groupCollapsed('ErrorBoundary');
		console.error(error);
		console.groupEnd();
	}, [error]);

	return <BlueScreen />;
}
