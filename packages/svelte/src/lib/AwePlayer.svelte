<script lang="ts">
  import '@awe-player/icons/dist/awe.css';

  export let src: string[] = [];

  // player state
  let paused = true;
  let currentTime = 0;
  let duration = undefined;

  // event handlers

  function handlePlayPause() {
    paused = !paused;
  }
</script>

<div class="w-full h-full relative bg-black">
  <video bind:paused bind:currentTime bind:duration class="w-full h-full">
    {#each src as source}
      <source src={source} />
    {/each}
    <track kind="captions" />
  </video>
  <!-- controls -->
  <div class="absolute top-0 bottom-0 left-0 right-0 text-white">
    <div />
    <div />
    <div>
      <div>
        <button on:click={handlePlayPause}><i class="awe-play" /></button>
      </div>
    </div>
  </div>
</div>
