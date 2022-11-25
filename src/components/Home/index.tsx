import { Button } from '@ui/Button';
import { Container } from '@ui/Container';

export function Home() {
	return (
		<Container>
			<div className="space-y-6">
				<div className="text-8xl font-bold italic text-center">
					<span className="bg-clip-text text-transparent bg-gradient-to-r from-[#9b51e0] to-[#2d9cdb]">
						nytro
					</span>
				</div>
				<div className="mt-8 prose-lg">
					Welcome to . This project contains a very minimal note-taking
					application.
				</div>

				<Button href="/notes" fullWidth>
					View Your Notes
				</Button>
			</div>
		</Container>
	);
}
