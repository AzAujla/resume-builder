import global from '$lib/global.svelte';

localStorage.theme = localStorage.theme || 'light';
global.theme = localStorage.theme;
if (localStorage.resume) {
	global.resume = JSON.parse(localStorage.resume);
}
