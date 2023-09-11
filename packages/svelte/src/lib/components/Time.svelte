<script lang="ts">
	import timeFormatter from '$lib/utils/timeFormatter.js';

	export let current_time: number;
	export let duration: number;
</script>

<div
	class="px-2.5 py-2 font-semibold opacity-0 transition-opacity ease-out"
	class:opacity-100={duration}
>
	{timeFormatter(current_time || 0)} / {timeFormatter(duration)}
</div>
