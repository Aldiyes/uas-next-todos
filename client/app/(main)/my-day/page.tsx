import { LogoutButton } from '@/components/auth/logout-button';
import { getUser } from '@/lib/actions/auth-actions';

export default async function MyDayPage() {
	const user = await getUser();
	return (
		<div>
			{JSON.stringify(user, null, 2)}
			<LogoutButton />
		</div>
	);
}
