<script lang="ts">
  import '@awe-player/icons/dist/awe.css';

  import { onMount } from 'svelte';
  import screenfull from 'screenfull';
  import Time from './components/Time.svelte';

  export let src: string[] = [];

  // player state
  let awePlayer: HTMLDivElement;
  let paused = true;
  let currentTime = 0;
  let duration: number | undefined = undefined;
  let currentProgress = 0;
  let loading = true;
  let is_fullscreen = false;

  // video vars
  let is_video_data = false;
  let is_pointer_over_video = false;
  let is_idle = false;

  onMount(() => {
    if (duration) {
      loading = false;
    }
  });

  $: show_controls = true;

  $: if (duration) {
    currentProgress = (currentTime / duration) * 100;
  }

  // event handlers

  function onVideoLoadedData(e: any) {
    is_video_data = true;
  }

  function handlePlayPause() {
    paused = !paused;
  }

  function handleFullscreen() {
    is_fullscreen = !is_fullscreen;
    screenfull.toggle(awePlayer);
  }

  function handlePointerOver() {
    is_pointer_over_video = true;
  }

  function handlePointerOut() {
    is_pointer_over_video = false;
  }
</script>

<div
  bind:this={awePlayer}
  on:pointerover={handlePointerOver}
  on:pointerout={handlePointerOut}
  class="relative h-full w-full flex justify-center items-center bg-black"
>
  <video
    on:loadeddata|once={onVideoLoadedData}
    bind:paused
    bind:currentTime
    bind:duration
    class="h-auto w-full"
  >
    {#each src as source}
      <source src={source} />
    {/each}
    <track kind="captions" />
  </video>
  {#if loading}
    <!-- loading spinner -->
    <div class="absolute top-0 bottom-0 left-0 right-0 m-auto w-fit h-fit">
      <div role="status">
        <svg
          aria-hidden="true"
          class="w-12 h-12 animate-spin text-black/20 fill-blue-500"
          viewBox="0 0 100 101"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
            fill="currentColor"
          />
          <path
            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
            fill="currentFill"
          />
        </svg>
        <span class="sr-only">Loading...</span>
      </div>
    </div>
  {:else}
    <!-- controls -->
    <div class="absolute bottom-0 left-0 right-0 top-0 text-white bg-black/40">
      <Time {currentTime} {duration} />
      <div />
      <div
        style="opacity: {show_controls ? '1' : '0'}"
        class="absolute bottom-4 left-0 right-0 mx-auto flex max-w-2xl justify-between space-x-2 rounded-lg bg-black/60 p-2 backdrop-blur-lg"
      >
        <div class="awe-btn-wrapper">
          <button class="awe-btn" on:click={handlePlayPause}>
            <i class="awe-skip_previous" />
          </button>
          <button class="awe-btn" on:click={handlePlayPause}>
            {#if paused}
              <i class="awe-play" />
            {:else}
              <i class="awe-pause" />
            {/if}
          </button>
          <button class="awe-btn" on:click={handlePlayPause}>
            <i class="awe-skip_next" />
          </button>
        </div>
        <div
          class="relative flex w-full flex-1 justify-center items-center h-2.5 rounded-full overflow-hidden my-auto group/slider"
        >
          <div
            class="bg-white/20 h-full w-full absolute top-0 bottom-0 left-0 m-auto rounded-full"
          ></div>
          <div
            style="width: {currentProgress}%"
            class="bg-blue-500 group-hover/slider:bg-blue-400 h-full absolute top-0 bottom-0 left-0 m-auto rounded-full"
          ></div>
          <input
            class="awe-input-slider"
            min={0}
            max={duration}
            step={0.1}
            bind:value={currentTime}
            type="range"
          />
        </div>
        <div class="awe-btn-wrapper">
          <button class="awe-btn" on:click={handlePlayPause}>
            <i class="awe-volume_max" />
          </button>
          <button class="awe-btn" on:click={handlePlayPause}>
            <i class="awe-subtitles_on" />
          </button>
          <button class="awe-btn" on:click={handlePlayPause}>
            <i class="awe-settings" />
          </button>
          <button class="awe-btn" on:click={handleFullscreen}>
            {#if is_fullscreen}
              <i class="awe-fullscreen_exit" />
            {:else}
              <i class="awe-fullscreen_enter" />
            {/if}
          </button>
        </div>
      </div>
    </div>
  {/if}
</div>
