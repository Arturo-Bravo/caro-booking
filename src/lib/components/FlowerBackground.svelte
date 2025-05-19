<script lang="ts">
  import LilacFlower from './LilacFlower.svelte';
</script>

<div class="background">
  <LilacFlower variant={0} />
  <LilacFlower variant={1} />
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

</style>
