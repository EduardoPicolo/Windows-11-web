'use client';

import { BlueScreen } from '@repo/ui/components';
import { useEffect } from 'react';

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
