<script lang="ts">
  export let min: number = 0;
  export let max: number = 100;
  export let value: number = 0;
  export let step: number = 1;
  export let show_tooltip: boolean = false;

  let input_slider_instance: HTMLInputElement;
  let tooltip_value = 0;
  let current_progress: number = 0;

  $: if (max) {
    current_progress = (value / max) * 100;
  }

  function handleTooltipValue(e: any) {
    const mouseX =
      e.clientX - input_slider_instance.getBoundingClientRect().left;
    const sliderWidth = input_slider_instance.clientWidth;
    const minValue = parseInt(input_slider_instance.min);
    const maxValue = parseInt(input_slider_instance.max);

    const percent = (mouseX / sliderWidth) * 100;
    const value = Math.round(
      (percent / 100) * (maxValue - minValue) + minValue,
    );
    tooltip_value = value + 1;
  }
</script>

<div class="absolute top-0 left-0 p-2 rounded-lg bg-black">Hello</div>
<div
  class="relative flex w-full flex-1 justify-center items-center h-2.5 rounded-full overflow-hidden my-auto group/slider"
>
  <div
    class="bg-white/20 h-full w-full absolute top-0 bottom-0 left-0 m-auto rounded-full"
  ></div>
  <div
    style="width: {current_progress}%"
    class="bg-blue-500 group-hover/slider:bg-blue-400 h-full absolute top-0 bottom-0 left-0 m-auto rounded-full"
  ></div>
  <input
    bind:this={input_slider_instance}
    class="absolute bottom-0 left-0 right-0 top-0 m-auto h-full w-full cursor-pointer appearance-none opacity-0"
    {min}
    {max}
    {step}
    bind:value
    on:mousemove={handleTooltipValue}
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
