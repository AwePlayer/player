<script>
  import { AwePlayer } from '@awe-player/svelte';
  import '@awe-player/tailwind/player.css';
</script>

<div class="mx-auto aspect-video max-w-4xl relative example">
  <div class="grad-box" />
  <div class="w-full h-full rounded-lg overflow-hidden bg-white">
    <AwePlayer
      src={[
        'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
      ]}
    />
  </div>
</div>

<style>
  .grad-box::before {
    content: '';
    z-index: -1;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: linear-gradient(-45deg, #60efff -15%, #0061ff 200%);
    transform: translate3d(0px, 5px, 0) scale(0.95);
    filter: blur(30px);
    opacity: 1;
    transition: all 0.3s;
    border-radius: inherit;
  }
  .example:hover .grad-box::before {
    transform: translate3d(0px, 10px, 0) scale(1);
  }
  .grad-box::after {
    content: '';
    z-index: -1;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: inherit;
    border-radius: inherit;
  }
</style>
