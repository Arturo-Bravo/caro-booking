<script lang="ts">
  import LilacFlower from './LilacFlower.svelte';
</script>

<div class="background">
  <LilacFlower variant={0} />
  <LilacFlower variant={1} />
  <LilacFlower variant={2} />
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
