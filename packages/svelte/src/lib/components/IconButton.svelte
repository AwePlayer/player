<script lang="ts">
  export let icon: string;
</script>

<button
  class="flex aspect-square h-8 w-8 items-center justify-center p-2 opacity-75 transition-opacity ease-out hover:opacity-100"
  on:click
>
  <i class="awe-icon-{icon}" />
</button>
