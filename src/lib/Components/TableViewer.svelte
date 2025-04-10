<script lang="ts" generics="T extends Record<string, any>">
	let {
		headers,
		data = $bindable(),
		title = ''
	}: { headers: string[]; title?: string; data: T[] } = $props();
</script>

{#if title}
	<h2 class="mt-4 text-2xl font-bold">{title}</h2>
{/if}

<table class="my-2 mb-4 min-w-full table-auto rounded border border-gray-300 shadow-md">
	<thead class="bg-gray-100">
		<tr>
			{#each headers as header}
				<th class="border-b px-4 py-2 text-left text-sm font-semibold text-gray-700">{header}</th>
			{/each}
		</tr>
	</thead>
	<tbody>
		{#each data as row}
			<tr class="hover:bg-gray-50">
				{#each Object.keys(row) as key}
					<td class="border-b px-4 py-2 text-sm text-gray-800">{row[key]}</td>
				{/each}
			</tr>
		{/each}
	</tbody>
</table>
