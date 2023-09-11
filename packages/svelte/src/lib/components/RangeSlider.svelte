<script lang="ts">
	import timeFormatter from '$lib/utils/timeFormatter.js';
	import { computePosition } from '@floating-ui/dom';

	export let min: number = 0;
	export let max: number = 100;
	export let value: number = 0;
	export let step: number = 1;
	export let show_tooltip: boolean = false;

	let tooltip_instance: HTMLDivElement;
	let tooltip_value: number = 0;
	let current_progress: number = 0;

	$: if (max) {
		current_progress = (value / max) * 100;
	}

	function handleMouseEnter() {
		tooltip_instance.style.opacity = '1';
	}

	function handleMouseLeave() {
		tooltip_instance.style.opacity = '0';
	}

	function handleMouseMove(e: MouseEvent): void {
		const rangeSlider = e.target as HTMLInputElement;
		const rect = rangeSlider.getBoundingClientRect();
		const offsetX = e.clientX - rect.left;
		const percentage = (offsetX / rect.width) * 100;

		const calculatedValue =
			(parseFloat(rangeSlider.max) - parseFloat(rangeSlider.min)) *
				(percentage / 100) +
			parseFloat(rangeSlider.min);

		const clampedValue = Math.max(
			parseFloat(rangeSlider.min),
			Math.min(parseFloat(rangeSlider.max), calculatedValue),
		);

		tooltip_value = clampedValue;

		const virtualEl = {
			getBoundingClientRect() {
				return {
					width: 0,
					height: 0,
					x: e.clientX,
					y: e.clientY,
					left: e.clientX,
					right: e.clientX,
					top: e.clientY,
					bottom: e.clientY,
				};
			},
		};

		computePosition(virtualEl, tooltip_instance, {
			placement: 'bottom',
		}).then(({ x }) => {
			tooltip_instance.style.left = `${x}px`;
		});
	}
</script>

{#if show_tooltip}
	<div
		bind:this={tooltip_instance}
		class="absolute bottom-10 left-0 rounded-lg bg-black px-4 py-2 opacity-0 transition-[width,opacity] ease-out"
	>
		{timeFormatter(tooltip_value)}
	</div>
{/if}

<div
	class="group/slider relative my-auto flex h-2.5 w-full flex-1 items-center justify-center overflow-hidden rounded-full"
>
	<div
		class="absolute bottom-0 left-0 top-0 m-auto h-full w-full rounded-full bg-white/20"
	/>
	<div
		style="width: {current_progress}%"
		class="absolute bottom-0 left-0 top-0 m-auto h-full rounded-full bg-blue-500 group-hover/slider:bg-blue-400"
	/>
	<input
		class="absolute bottom-0 left-0 right-0 top-0 m-auto h-full w-full cursor-pointer appearance-none opacity-0"
		{min}
		{max}
		{step}
		bind:value
		on:mouseenter={handleMouseEnter}
		on:mousemove={handleMouseMove}
		on:mouseleave={handleMouseLeave}
		type="range"
	/>
</div>

<style>
	input[type='range']::-webkit-slider-thumb {
		appearance: none;
		width: 1px;
		height: 1px;
		background-color: black;
	}
</style>
