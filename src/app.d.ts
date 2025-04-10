// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}

	interface Storage {
		theme: 'light' | 'dark';
	}

	interface Experience {
		company?: string;
		position?: string;
		startDate?: string;
		endDate?: string;
		responsibilities?: string;
	}

	interface Education {
		institution?: string;
		degree?: string;
		endDate?: string;
		grade?: string;
	}

	interface Certification {
		name?: string;
		organization?: string;
		issueDate?: string;
	}

	interface Project {
		title?: string;
		link?: string;
		repo?: string;
	}

	interface Award {
		title?: string;
		organization?: string;
	}

	interface language {
		name?: string;
		proficiency?: 'Beginner' | 'Intermediate' | 'Advanced' | 'Fluent' | 'Native';
	}

	interface Reference {
		name?: string;
		relationship?: string;
		email?: string;
		phone?: string;
	}

	interface Resume {
		fullName?: string;
		email?: string;
		phone?: string;
		address?: string;
		website?: string;
		linkedin?: string;
		github?: string;
		portfolio?: string;
		photo?: string;

		summary?: string;

		experience?: Experience[];

		education?: Education[];

		skills?: string;

		certifications?: Certification[];

		projects?: Project[];

		awards?: Award[];

		languages?: language[];

		interests?: string;

		references?: Reference[];
	}
}

export {};
