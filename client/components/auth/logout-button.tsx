'use client';

import { Button } from '@/components/ui/button';
import { logout } from '@/lib/actions/auth-actions';
import { useRouter } from 'next/navigation';

export const LogoutButton = () => {
	const router = useRouter();
	const onLogout = async () => {
		await logout();
		router.push('/');
	};
	return <Button onClick={onLogout}>Logout</Button>;
};
