<script lang="ts">
	import TableEditor from '$lib/Components/TableEditor.svelte';
	import global from '$lib/global.svelte';
	import { onMount } from 'svelte';

	let resume: Resume = $state(
		global.resume || {
			experience: [],
			education: [],
			skills: '',
			certifications: [],
			projects: [],
			awards: [],
			languages: [],
			interests: '',
			references: []
		}
	);

	$effect(() => {
		global.resume = resume;
		localStorage.resume = JSON.stringify(resume);
	});
</script>

<div class="bg-default text-default flex min-h-screen w-screen flex-col {global.theme}">
	<div class="px-default flex min-h-10 items-center gap-4 border-b py-1 shadow-lg">
		<div class="font-caveat grow text-4xl font-extrabold">Resume Builder</div>
		<button
			class="btn-auto-outline relative h-8 w-8 rounded-full text-3xl"
			onclick={() => {
				localStorage.theme = global.theme === 'light' ? 'dark' : 'light';
				global.theme = localStorage.theme;
			}}
		>
			<div class="icon absolute top-0 left-[0.125rem]">{global.theme}_mode</div>
		</button>
		<a href="/preview" class="btn-auto-outline py-1">View </a>
	</div>
	<div class="flex grow">
		<div class="max-w-pc mx-auto grow border-x">
			<div class="flex flex-col">
				<!-- Name -->
				<div class="bg-primary-300 dark:bg-primary-900 flex h-32 flex-col items-end gap-4 px-12">
					<div class="text-5xl font-extrabold">Resume</div>
					<div class="w-1/2">
						<input
							type="text"
							placeholder="Enter your Full Name"
							class="block w-full rounded-lg text-black!"
							bind:value={resume.fullName}
						/>
					</div>
				</div>
				<!-- Contact -->
				<div class="flex min-h-12 border-b">
					<div class="px-default flex w-1/3 flex-col gap-2 border-r py-4">
						<div class="text-2xl font-semibold">Contact Info</div>
						<input
							type="text"
							bind:value={resume.address}
							placeholder="Enter your Address"
							class="block w-full rounded-lg text-xs text-black!"
						/>
						<input
							type="text"
							bind:value={resume.website}
							placeholder="Enter your Website"
							class="block w-full rounded-lg text-xs text-black!"
						/>
						<input
							type="text"
							bind:value={resume.phone}
							placeholder="Enter your Phone"
							class="block w-full rounded-lg text-xs text-black!"
						/>
						<input
							type="text"
							bind:value={resume.email}
							placeholder="Enter your Email"
							class="block w-full rounded-lg text-xs text-black!"
						/>
						<input
							type="text"
							bind:value={resume.linkedin}
							placeholder="Enter your LinkedIn"
							class="block w-full rounded-lg text-xs text-black!"
						/>
						<input
							type="text"
							bind:value={resume.github}
							placeholder="Enter your Github"
							class="block w-full rounded-lg text-xs text-black!"
						/>
						<input
							type="text"
							bind:value={resume.portfolio}
							placeholder="Enter your Portfolio Link"
							class="block w-full rounded-lg text-xs text-black!"
						/>
					</div>
					<div class="relative grow p-2">
						<div class="h-4 font-semibold">Summary</div>
						<textarea
							bind:value={resume.summary}
							class="mt-4 h-[calc(100%-2.5rem)] w-full resize-none border bg-transparent"
							placeholder="Enter a summary of yourself"
						></textarea>
					</div>
				</div>
				<!-- Experience -->
				<TableEditor
					title="Experience"
					headers={['Company', 'Position', 'Start Date', 'End Date', 'Responsibilities']}
					bind:data={resume.experience!}
					empty={{
						company: '',
						position: '',
						startDate: '',
						endDate: '',
						responsibilities: ''
					}}
				/>
				<!-- Education -->
				<TableEditor
					title="Education"
					headers={['Degree', 'Institution', 'End Date', 'Grade']}
					bind:data={resume.education!}
					empty={{
						degree: '',
						institution: '',
						endDate: '',
						grade: ''
					}}
				/>
				<!-- Certificates -->
				<TableEditor
					title="Certificates"
					headers={['Name', 'Organization', 'Issue Date']}
					bind:data={resume.certifications!}
					empty={{
						name: '',
						organization: '',
						issueDate: ''
					}}
				/>
				<!-- Skills -->
				<div class="flex flex-col gap-2 border-b px-4 py-4">
					<div class="px-default py-4 text-2xl font-semibold">Skills</div>
					<textarea
						bind:value={resume.skills}
						class="h-32 w-full resize-none border bg-transparent"
						placeholder="Enter your Interests"
					></textarea>
				</div>
				<!-- Projects -->
				<TableEditor
					title="Projects"
					headers={['Title', 'Link', 'Repo']}
					bind:data={resume.projects!}
					empty={{
						title: '',
						link: '',
						repo: ''
					}}
				/>
				<!-- Awards -->
				<TableEditor
					title="Awards"
					headers={['Title', 'Organization']}
					bind:data={resume.awards!}
					empty={{
						title: '',
						organization: ''
					}}
				/>
				<!-- Languages -->
				<TableEditor
					title="Languages"
					headers={['Name', 'Proficiency']}
					bind:data={resume.languages!}
					empty={{
						name: '',
						proficiency: 'Beginner'
					}}
				/>
				<!-- Interests -->
				<div class="flex flex-col gap-2 border-b px-4 py-4">
					<div class="px-default py-4 text-2xl font-semibold">Interests</div>
					<textarea
						bind:value={resume.interests}
						class="h-32 w-full resize-none border bg-transparent"
						placeholder="Enter your Interests"
					></textarea>
				</div>
				<!-- References -->
				<TableEditor
					title="References"
					headers={['Name', 'Email', 'Phone', 'Relationship']}
					bind:data={resume.references!}
					empty={{
						name: '',
						email: '',
						phone: '',
						relationship: ''
					}}
				/>
				<a class="btn-primary sticky bottom-4 m-4" href="/preview">View Resume</a>
			</div>
		</div>
	</div>
</div>
