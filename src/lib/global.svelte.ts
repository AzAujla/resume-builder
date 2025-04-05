// eslint-disable-next-line prefer-const
let global = $state<{
	theme: 'light' | 'dark';
	resume?: Resume;
}>({
	theme: 'light' as 'light' | 'dark'
});

export default global;
