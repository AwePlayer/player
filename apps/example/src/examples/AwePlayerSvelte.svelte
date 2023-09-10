<script>
  import { AwePlayer } from '@awe-player/svelte';
  import '@awe-player/icons/dist/awe-icon.css';
</script>

<div class="mx-auto max-w-4xl relative example p-4">
  <div class="grad-box" />
  <div class="w-full h-full rounded-lg overflow-hidden">
    <AwePlayer
      src={['/demo-video.mp4']}
      captions={[
        {
          title: 'English',
          lang: 'english',
          src: '/english.vtt',
        },
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
  .example {
    transition: all 0.3s ease-out;
  }
  .example:hover .grad-box::before {
    transform: translate3d(0px, 10px, 0) scale(1);
  }
  .example:hover {
    transform: translateY(-5px) scale(1.01);
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
