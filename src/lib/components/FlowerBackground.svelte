<script lang="ts">
  import FlowerBunch from './FlowerBunch.svelte';
</script>

<div class="background">
  <FlowerBunch />
</div>

<style>
  .background {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--background-color);
    z-index: -1;
  }

  .background :global(.flower) {
    transform: scale(1);
  }

  .background :global(.flower:nth-child(2)) {
    transform: scale(1.33);
  }

  .background :global(.flower:nth-child(3)) {
    transform: scale(0.80);
  }

</style>
