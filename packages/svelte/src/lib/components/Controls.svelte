<script lang="ts">
  import screenfull from 'screenfull';
  import Subtitles from './Subtitles.svelte';
  import RangeSlider from './RangeSlider.svelte';
  import IconButton from './IconButton.svelte';

  export let player_instance: HTMLDivElement;
  export let paused: boolean;
  export let current_time: number;
  export let duration: number;
  export let volume: number;
  export let on_subtitles: boolean;
  export let is_fullscreen: boolean;
  export let captions: string[] = [];

  // event handlers
  function handlePlayPause() {
    paused = !paused;
  }

  function handleFullscreen() {
    is_fullscreen = !is_fullscreen;
    screenfull.toggle(player_instance);
  }
</script>

<div class="absolute bottom-0 left-0 right-0 top-0 text-white bg-black/40">
  <!-- <DisplayTime /> -->
  <div />
  <div class="absolute bottom-20 left-0 right-0 mx-auto w-fit">
    <!-- <Subtitles {captions} bind:current_time /> -->
  </div>
  <div
    class="absolute bottom-4 left-0 right-0 mx-auto w-[calc(100%-32px)] flex max-w-2xl justify-between space-x-2 rounded-lg bg-black/60 p-2 backdrop-blur-lg"
  >
    <div class="flex items-center justify-center space-x-2">
      <IconButton icon="skip-previous" />
      <IconButton icon={paused ? 'play' : 'pause'} on:click={handlePlayPause} />
      <IconButton icon="skip-next" />
    </div>
    <div class="relative w-full h-2.5 my-auto">
      <RangeSlider
        max={duration}
        bind:value={current_time}
        show_tooltip={true}
      />
    </div>
    <div class="flex items-center justify-center space-x-2">
      <IconButton icon="volume-max" />
      <IconButton icon="subtitles-on" />
      <IconButton icon="settings" />
      <IconButton
        icon={is_fullscreen ? 'fullscreen-exit' : 'fullscreen-enter'}
        on:click={handleFullscreen}
      />
    </div>
  </div>
</div>
