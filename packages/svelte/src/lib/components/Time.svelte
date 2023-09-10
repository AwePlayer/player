<script lang="ts">
	import throttle from '../utils/throttle.js';
	export let duration: number;
	export let currentTime: number;

	let ft: string | number = 0;

	$: hours = duration >= 3600;

	$: {
		if (currentTime) setTime();
	}

	const setTime = throttle(
		() => {
			ft = formatTime(currentTime, hours);
		},
		250,
		true,
	);

	const formatTime = (seconds = 0, hours = false) => {
		let s = new Date(seconds * 1000).toISOString().substr(11, 8);
		return hours ? s : s.substring(3);
	};
</script>

<div
	style="opacity: {ft === 0 ? '0' : '1'};"
	class="px-2.5 py-2 text-sm font-semibold text-white transition-opacity ease-out"
>
	{ft} / {formatTime(duration)}
</div>
