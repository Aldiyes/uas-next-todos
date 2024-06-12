import { getToken } from '@/lib/actions/auth-actions';

const API_URL = process.env.API_URL;

export const getUserByEmail = async (email: string) => {
	console.log('[CLIENT > ACTION > GET_USER_BY_EMAIL] - ', email);
	const res = await fetch(`${API_URL}/user/${email}`, {
		method: 'GET',
	});

	if (!res.ok) {
		return null;
	}
	const data = await res.json();
	return data.data;
};

export const getUserById = async (id: string) => {
	const res = await fetch(`${API_URL}/api/user/${id}`, {
		method: 'GET',
	});

	if (!res.ok) {
		return null;
	}
	const data = await res.json();
	return data.data;
};

export const isLoggedIn = async () => {
	const token = await getToken();

	const res = await fetch(`${API_URL}/user`, {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});

	if (!res.ok) {
		return null;
	}
	const response = await res.json();
	return response;
};
