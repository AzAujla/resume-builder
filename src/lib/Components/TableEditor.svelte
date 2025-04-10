<script lang="ts" generics="T extends Record<string, any>">
	let {
		headers,
		data = $bindable(),
		empty,
		title = ''
	}: { headers: string[]; title?: string; data: T[]; empty: T } = $props();
</script>

<div class="my-6 min-h-12 w-full overflow-x-scroll border-b px-4 py-4">
	<div class="px-default mb-4 flex items-center border-b py-4 pr-0! text-2xl font-semibold">
		<div class="grow">{title}</div>
		<button
			class="btn-primary icon p-0"
			onclick={() => {
				data.push(empty);
			}}>add</button
		>
		<div class="pl-2 text-lg">
			Add {title}
		</div>
	</div>
	<table class="w-full table-auto border-separate border-spacing-y-3">
		<thead>
			<tr>
				{#each headers as header}
					<th>{header}</th>
				{/each}
				<th></th>
			</tr>
		</thead>
		<tbody>
			{#each data as row}
				<tr>
					{#each Object.keys(row) as key}
						<td class="px-2">
							{#if key != 'proficiency' && !key.toLowerCase().includes('date')}
								<input
									type="text"
									bind:value={row[key]}
									class="block w-full rounded-lg bg-transparent text-xs"
								/>
							{:else if key.toLowerCase().includes('date')}
								<input
									type="date"
									bind:value={row[key]}
									class="block w-full rounded-lg bg-transparent text-xs"
								/>
							{:else}
								<select
									bind:value={row[key]}
									class="block w-full rounded-lg bg-transparent text-xs"
								>
									{#each ['Beginner', 'Intermediate', 'Advanced', 'Fluent', 'Native'] as opt}
										<option value={opt}>{opt}</option>
									{/each}
								</select>
							{/if}
						</td>
					{/each}
					<td class="pl-2 text-right">
						<button
							class="btn-error icon p-1"
							onclick={() => {
								data.splice(data.indexOf(row), 1);
							}}>delete</button
						>
					</td>
				</tr>
			{/each}
		</tbody>
	</table>
</div>
