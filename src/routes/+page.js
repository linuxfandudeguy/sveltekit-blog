import { error } from '@sveltejs/kit';

export const load = async () => {
	try {
		const HomePageFile = await import('../../src/homepage.md');
		const Homepage = HomePageFile.default;

		return {
			Homepage: Homepage
		};
	} catch (err) {
		error(500, err);
	}
};
