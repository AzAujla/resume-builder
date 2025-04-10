<script lang="ts">
	import { goto } from '$app/navigation';
	import TableViewer from '$lib/Components/TableViewer.svelte';
	import global from '$lib/global.svelte';
	import { onMount } from 'svelte';

	onMount(() => {
		if (!global.resume) {
			goto('/');
		}
	});
</script>

{#if global.resume}
	<div class="flex flex-col">
		<!-- Header -->
		<div class="bg-primary-300 dark:bg-primary-900 flex h-32 flex-col items-end gap-4 px-12">
			<div class="text-5xl font-extrabold">Resume</div>
			<div class="w-1/2 text-right text-xl font-bold text-black">
				{global.resume!.fullName || ''}
			</div>
		</div>

		<!-- Contact + Summary -->
		<div class="flex min-h-12 border-b">
			<!-- Contact Info -->
			<div class="px-default flex w-1/3 flex-col gap-2 border-r py-4">
				<div class="text-2xl font-semibold">Contact Info</div>
				{#if global.resume!.address}
					<div class="flex items-center gap-2">
						<div class="icon-filled">location_on</div>
						<div>{global.resume!.address}</div>
					</div>
				{/if}
				{#if global.resume!.website}
					<div class="flex items-center gap-2">
						<div class="icon-filled">link</div>
						<div>{global.resume!.website}</div>
					</div>
				{/if}
				{#if global.resume!.phone}
					<div class="flex items-center gap-2">
						<div class="icon-filled">call</div>
						<div>{global.resume!.phone}</div>
					</div>
				{/if}
				{#if global.resume?.email}
					<div class="flex items-center gap-2">
						<div class="icon-filled">mail</div>
						<div>
							{global.resume?.email}
						</div>
					</div>
				{/if}
				{#if global.resume?.linkedin}
					<div class="flex items-center gap-2">
						<div class="">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								x="0px"
								y="0px"
								width="1.2rem"
								height="1.2rem"
								viewBox="4 4 45 45"
							>
								<path
									d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"
								></path>
							</svg>
						</div>
						<div>
							{global.resume?.linkedin}
						</div>
					</div>
				{/if}
				{#if global.resume?.github}
					<div class="flex items-center gap-2">
						<div class="">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								x="0px"
								y="0px"
								width="1.2rem"
								height="1.2rem"
								viewBox="4 4 25 25"
							>
								<path
									fill-rule="evenodd"
									d="M 16 4 C 9.371094 4 4 9.371094 4 16 C 4 21.300781 7.4375 25.800781 12.207031 27.386719 C 12.808594 27.496094 13.027344 27.128906 13.027344 26.808594 C 13.027344 26.523438 13.015625 25.769531 13.011719 24.769531 C 9.671875 25.492188 8.96875 23.160156 8.96875 23.160156 C 8.421875 21.773438 7.636719 21.402344 7.636719 21.402344 C 6.546875 20.660156 7.71875 20.675781 7.71875 20.675781 C 8.921875 20.761719 9.554688 21.910156 9.554688 21.910156 C 10.625 23.746094 12.363281 23.214844 13.046875 22.910156 C 13.15625 22.132813 13.46875 21.605469 13.808594 21.304688 C 11.144531 21.003906 8.34375 19.972656 8.34375 15.375 C 8.34375 14.0625 8.8125 12.992188 9.578125 12.152344 C 9.457031 11.851563 9.042969 10.628906 9.695313 8.976563 C 9.695313 8.976563 10.703125 8.65625 12.996094 10.207031 C 13.953125 9.941406 14.980469 9.808594 16 9.804688 C 17.019531 9.808594 18.046875 9.941406 19.003906 10.207031 C 21.296875 8.65625 22.300781 8.976563 22.300781 8.976563 C 22.957031 10.628906 22.546875 11.851563 22.421875 12.152344 C 23.191406 12.992188 23.652344 14.0625 23.652344 15.375 C 23.652344 19.984375 20.847656 20.996094 18.175781 21.296875 C 18.605469 21.664063 18.988281 22.398438 18.988281 23.515625 C 18.988281 25.121094 18.976563 26.414063 18.976563 26.808594 C 18.976563 27.128906 19.191406 27.503906 19.800781 27.386719 C 24.566406 25.796875 28 21.300781 28 16 C 28 9.371094 22.628906 4 16 4 Z"
								></path>
							</svg>
						</div>
						<div>
							{global.resume?.github}
						</div>
					</div>
				{/if}
				{#if global.resume?.portfolio}
					<div class="flex items-center gap-2">
						<div class="icon-filled">contact_page</div>
						<div>
							{global.resume?.portfolio}
						</div>
					</div>
				{/if}
			</div>

			<!-- Summary -->
			{#if global.resume!.summary}
				<div class="relative grow p-2">
					<div class="h-4 font-semibold">Summary</div>
					<div class="mt-4 h-[calc(100%-2.5rem)]">{global.resume!.summary}</div>
				</div>
			{/if}
		</div>

		<!-- Experience -->
		<TableViewer
			data={global.resume!.experience!}
			headers={['Company', 'Position', 'Start Date', 'End Date', 'Responsibilities']}
			title="Experience"
		/>
		<!-- Education -->
		<TableViewer
			data={global.resume!.education!}
			headers={['Institution', 'Degre', 'End Date', 'Grade']}
			title="Education"
		/>
		<!-- Certifications -->
		<TableViewer
			data={global.resume!.certifications!}
			headers={['Name', 'Organizations', 'Issue Date']}
			title="Certifications"
		/>
		<!-- Skills -->
		{#if global.resume!.interests}
			<div class="border-b py-4">
				<div class="mb-2 text-2xl font-semibold">Skills</div>
				<div>
					{global.resume!.skills}
				</div>
			</div>
		{/if}

		<!-- Projects -->
		<TableViewer
			data={global.resume!.projects!}
			headers={['Title', 'Link', 'Repo']}
			title="Projects"
		/>
		<!-- Awards -->
		<TableViewer data={global.resume!.awards!} headers={['Award', 'Institution']} title="Awards" />
		<!-- Languages -->
		<TableViewer
			data={global.resume!.languages!}
			headers={['Language', 'Proficiency']}
			title="Languages"
		/>
		<!-- Interests -->
		{#if global.resume!.interests}
			<div class="border-b py-4">
				<div class="mb-2 text-2xl font-semibold">Interests</div>
				<div>
					{global.resume!.interests}
				</div>
			</div>
		{/if}

		<!-- References -->
		<TableViewer
			data={global.resume!.references!}
			headers={['Name', 'Email', 'Phone', 'Relationship']}
			title="References"
		/>
	</div>
{/if}
