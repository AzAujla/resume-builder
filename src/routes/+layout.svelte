<script lang="ts">
	import global from '$lib/global.svelte';
	import '../app.css';

	let { children } = $props();
</script>

{@render children()}
