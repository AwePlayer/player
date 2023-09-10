import { writable } from 'svelte/store';

const playerStore = writable({
	currentVideoLang: '',
	currentCaptionLang: '',
});

export default playerStore;
