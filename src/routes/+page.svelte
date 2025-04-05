<script lang="ts">
	import global from '$lib/global.svelte';
	import { onMount } from 'svelte';

	let resume: Resume = $state(
		global.resume || {
			experience: [],
			education: [],
			skills: [],
			certifications: [],
			projects: [],
			awards: [],
			languages: [],
			interests: '',
			references: []
		}
	);

	onMount(() => {
		if (localStorage.resume) {
			resume = JSON.parse(localStorage.resume);
		}
	});
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
				global.theme = global.theme === 'light' ? 'dark' : 'light';
			}}
		>
			<div class="icon absolute top-0 left-[0.125rem]">{global.theme}_mode</div>
		</button>
		<a href="/preview" class="btn-auto-outline py-1">View </a>
	</div>
	<div class="flex grow">
		<div class="max-w-phone mx-auto grow border-x">
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
				<div class="min-h-12 w-full overflow-x-scroll border-b">
					<div class="px-default mb-4 flex items-center border-b text-2xl font-semibold">
						<div class="grow">Experience</div>
						<button
							class="btn-primary icon p-0"
							onclick={() => {
								resume.experience!.push({
									company: '',
									position: '',
									startDate: '',
									endDate: '',
									responsibilities: ''
								});
							}}>add</button
						>
					</div>
					<table class="w-full table-auto border-collapse">
						<thead>
							<tr>
								<th>Company</th>
								<th>Position</th>
								<th>Start Date</th>
								<th>End Date</th>
								<th>Responsibilities</th>
								<th></th>
							</tr>
						</thead>
						<tbody>
							{#each resume.experience! as experience}
								<tr>
									<td>
										<input
											type="text"
											bind:value={experience.company}
											placeholder="Enter Company Name"
											class="block w-full rounded-lg text-xs text-black!"
										/>
									</td>
									<td>
										<input
											type="text"
											bind:value={experience.position}
											placeholder="Enter Position"
											class="block w-full rounded-lg text-xs text-black!"
										/>
									</td>
									<td>
										<input
											type="date"
											bind:value={experience.startDate}
											class="block w-full rounded-lg text-xs text-black!"
										/>
									</td>
									<td>
										<input
											type="date"
											bind:value={experience.endDate}
											class="block w-full rounded-lg text-xs text-black!"
										/>
									</td>
									<td>
										<input
											type="text"
											bind:value={experience.responsibilities}
											class="block w-full rounded-lg text-xs text-black!"
										/>
									</td>
									<td>
										<button
											class="btn-error icon p-1"
											onclick={() => {
												resume.experience!.splice(resume.experience!.indexOf(experience), 1);
											}}>delete</button
										>
									</td>
								</tr>
							{/each}
						</tbody>
					</table>
				</div>
				<!-- Education -->
				<div class="min-h-12 w-full overflow-x-scroll border-b">
					<div class="px-default mb-4 flex items-center border-b text-2xl font-semibold">
						<div class="grow">Education</div>
						<button
							class="btn-primary icon p-0"
							onclick={() => {
								resume.education!.push({
									endDate: '',
									institution: '',
									degree: '',
									grade: ''
								});
							}}>add</button
						>
					</div>
					<table class="w-full table-auto border-collapse">
						<thead>
							<tr>
								<th>Degree</th>
								<th>Institution</th>
								<th>End Date</th>
								<th>Grade</th>
								<th></th>
							</tr>
						</thead>
						<tbody>
							{#each resume.education! as education}
								<tr>
									<td>
										<input
											type="text"
											bind:value={education.degree}
											class="block w-full rounded-lg text-xs text-black!"
										/>
									</td>
									<td>
										<input
											type="text"
											bind:value={education.institution}
											class="block w-full rounded-lg text-xs text-black!"
										/>
									</td>
									<td>
										<input
											type="date"
											bind:value={education.endDate}
											class="block w-full rounded-lg text-xs text-black!"
										/>
									</td>
									<td>
										<input
											type="text"
											bind:value={education.grade}
											class="block w-full rounded-lg text-xs text-black!"
										/>
									</td>
									<td>
										<button
											class="btn-error icon p-1"
											onclick={() => {
												resume.education!.splice(resume.education!.indexOf(education), 1);
											}}>delete</button
										>
									</td>
								</tr>
							{/each}
						</tbody>
					</table>
				</div>
				<!-- Certificates -->
				<div class="min-h-12 w-full overflow-x-scroll border-b">
					<div class="px-default mb-4 flex items-center border-b text-2xl font-semibold">
						<div class="grow">Certifications</div>
						<button
							class="btn-primary icon p-0"
							onclick={() => {
								resume.certifications!.push({
									name: '',
									organization: '',
									issueDate: ''
								});
							}}>add</button
						>
					</div>
					<table class="w-full table-auto border-collapse">
						<thead>
							<tr>
								<th>Name</th>
								<th>Organization</th>
								<th>Issue Date</th>
								<th></th>
							</tr>
						</thead>
						<tbody>
							{#each resume.certifications! as certification}
								<tr>
									<td>
										<input
											type="text"
											bind:value={certification.name}
											class="block w-full rounded-lg text-xs text-black!"
										/>
									</td>
									<td>
										<input
											type="text"
											bind:value={certification.organization}
											class="block w-full rounded-lg text-xs text-black!"
										/>
									</td>
									<td>
										<input
											type="date"
											bind:value={certification.issueDate}
											class="block w-full rounded-lg text-xs text-black!"
										/>
									</td>
									<td>
										<button
											class="btn-error icon p-1"
											onclick={() => {
												resume.certifications!.splice(
													resume.certifications!.indexOf(certification),
													1
												);
											}}>delete</button
										>
									</td>
								</tr>
							{/each}
						</tbody>
					</table>
				</div>
				<!-- Skills -->
				<div class="px-default min-h-12 w-full border-b py-4">
					<div class="mb-4 flex items-center border-b text-2xl font-semibold">
						<div class="grow">Skills</div>
						<button class="btn-primary icon p-0" onclick={() => resume.skills!.push('')}>add</button
						>
					</div>
					<div class="flex flex-wrap gap-2">
						{#each resume.skills! as skill, i}
							<div class="flex items-center gap-2">
								<input
									type="text"
									bind:value={resume.skills![i]}
									placeholder="Skill"
									class="rounded-lg text-xs text-black!"
								/>
								<button class="btn-error icon p-1" onclick={() => resume.skills!.splice(i, 1)}
									>delete</button
								>
							</div>
						{/each}
					</div>
				</div>
				<!-- Projects -->
				<div class="min-h-12 w-full overflow-x-scroll border-b">
					<div class="px-default mb-4 flex items-center border-b text-2xl font-semibold">
						<div class="grow">Projects</div>
						<button
							class="btn-primary icon p-0"
							onclick={() => resume.projects!.push({ title: '', link: '', repo: '' })}>add</button
						>
					</div>
					<table class="w-full table-auto border-collapse">
						<thead>
							<tr>
								<th>Title</th>
								<th>Link</th>
								<th>Repo</th>
								<th></th>
							</tr>
						</thead>
						<tbody>
							{#each resume.projects! as project}
								<tr>
									<td
										><input
											type="text"
											bind:value={project.title}
											class="block w-full rounded-lg text-xs text-black!"
										/></td
									>
									<td
										><input
											type="text"
											bind:value={project.link}
											class="block w-full rounded-lg text-xs text-black!"
										/></td
									>
									<td
										><input
											type="text"
											bind:value={project.repo}
											class="block w-full rounded-lg text-xs text-black!"
										/></td
									>
									<td>
										<button
											class="btn-error icon p-1"
											onclick={() => resume.projects!.splice(resume.projects!.indexOf(project), 1)}
											>delete</button
										>
									</td>
								</tr>
							{/each}
						</tbody>
					</table>
				</div>
				<!-- Awards -->
				<div class="min-h-12 w-full overflow-x-scroll border-b">
					<div class="px-default mb-4 flex items-center border-b text-2xl font-semibold">
						<div class="grow">Awards</div>
						<button
							class="btn-primary icon p-0"
							onclick={() => resume.awards!.push({ title: '', organization: '' })}>add</button
						>
					</div>
					<table class="w-full table-auto border-collapse">
						<thead>
							<tr>
								<th>Title</th>
								<th>Organization</th>
								<th></th>
							</tr>
						</thead>
						<tbody>
							{#each resume.awards! as award}
								<tr>
									<td
										><input
											type="text"
											bind:value={award.title}
											class="block w-full rounded-lg text-xs text-black!"
										/></td
									>
									<td
										><input
											type="text"
											bind:value={award.organization}
											class="block w-full rounded-lg text-xs text-black!"
										/></td
									>
									<td>
										<button
											class="btn-error icon p-1"
											onclick={() => resume.awards!.splice(resume.awards!.indexOf(award), 1)}
											>delete</button
										>
									</td>
								</tr>
							{/each}
						</tbody>
					</table>
				</div>
				<!-- Languages -->
				<div class="min-h-12 w-full overflow-x-scroll border-b">
					<div class="px-default mb-4 flex items-center border-b text-2xl font-semibold">
						<div class="grow">Languages</div>
						<button
							class="btn-primary icon p-0"
							onclick={() => resume.languages!.push({ name: '', proficiency: 'Beginner' })}
							>add</button
						>
					</div>
					<table class="w-full table-auto border-collapse">
						<thead>
							<tr>
								<th>Language</th>
								<th>Proficiency</th>
								<th></th>
							</tr>
						</thead>
						<tbody>
							{#each resume.languages! as language}
								<tr>
									<td
										><input
											type="text"
											bind:value={language.name}
											class="block w-full rounded-lg text-xs text-black!"
										/></td
									>
									<td>
										<select
											bind:value={language.proficiency}
											class="rounded-lg text-xs text-black!"
										>
											<option value="Beginner">Beginner</option>
											<option value="Intermediate">Intermediate</option>
											<option value="Advanced">Advanced</option>
											<option value="Fluent">Fluent</option>
											<option value="Native">Native</option>
										</select>
									</td>
									<td>
										<button
											class="btn-error icon p-1"
											onclick={() =>
												resume.languages!.splice(resume.languages!.indexOf(language), 1)}
											>delete</button
										>
									</td>
								</tr>
							{/each}
						</tbody>
					</table>
				</div>
				<!-- Interests -->
				<div class="px-default min-h-12 w-full border-b py-4">
					<div class="mb-4 border-b text-2xl font-semibold">Interests</div>
					<textarea
						bind:value={resume.interests}
						class="w-full resize-none border bg-transparent text-black!"
						placeholder="List your interests (comma separated or paragraph)"
					></textarea>
				</div>
				<!-- References -->
				<div class="min-h-12 w-full overflow-x-scroll border-b">
					<div class="px-default mb-4 flex items-center border-b text-2xl font-semibold">
						<div class="grow">References</div>
						<button
							class="btn-primary icon p-0"
							onclick={() =>
								resume.references!.push({ name: '', relationship: '', email: '', phone: '' })}
							>add</button
						>
					</div>
					<table class="w-full table-auto border-collapse">
						<thead>
							<tr>
								<th>Name</th>
								<th>Relationship</th>
								<th>Email</th>
								<th>Phone</th>
								<th></th>
							</tr>
						</thead>
						<tbody>
							{#each resume.references! as reference}
								<tr>
									<td
										><input
											type="text"
											bind:value={reference.name}
											class="block w-full rounded-lg text-xs text-black!"
										/></td
									>
									<td
										><input
											type="text"
											bind:value={reference.relationship}
											class="block w-full rounded-lg text-xs text-black!"
										/></td
									>
									<td
										><input
											type="text"
											bind:value={reference.email}
											class="block w-full rounded-lg text-xs text-black!"
										/></td
									>
									<td
										><input
											type="text"
											bind:value={reference.phone}
											class="block w-full rounded-lg text-xs text-black!"
										/></td
									>
									<td>
										<button
											class="btn-error icon p-1"
											onclick={() =>
												resume.references!.splice(resume.references!.indexOf(reference), 1)}
											>delete</button
										>
									</td>
								</tr>
							{/each}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	</div>
</div>
