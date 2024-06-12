import { NextRequest, NextResponse } from 'next/server';

import { db } from '@/lib/db';

export async function GET(
	req: NextRequest,
	{ params }: { params: { email: string } }
) {
	try {
		const userExists = await db.user.findUnique({
			where: {
				email: params.email,
			},
		});
		if (!userExists) {
			return NextResponse.json(
				{ error: 'Email does not exist' },
				{ status: 404 }
			);
		}

		return NextResponse.json(
			{ data: userExists, success: 'Success' },
			{ status: 201 }
		);
	} catch (error) {
		return NextResponse.json(
			{ error: 'Internal server error' },
			{ status: 500 }
		);
	}
}
