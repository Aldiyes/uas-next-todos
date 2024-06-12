import { getUser } from '@/lib/actions/auth-actions';
import { Footer } from './_components/footer';
import { Heading } from './_components/heading';

export default async function GetStartedPage() {
	const currentUser = await getUser();
	return (
		<main className="flex min-h-full flex-col">
			<div className="flex flex-1 flex-col items-center justify-center gap-y-8 px-6 pb-10 text-center md:justify-start">
				<Heading isAuthenticated={currentUser ? true : false} />
			</div>
			<Footer />
		</main>
	);
}
