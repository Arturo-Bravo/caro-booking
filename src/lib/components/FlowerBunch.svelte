<script lang="ts">
  import LilacFlower from './LilacFlower.svelte';
</script>

<div class="bunch">
  <LilacFlower variant={0} />
  <LilacFlower variant={1} />
  <LilacFlower variant={2} />
  <LilacFlower variant={0} />
  <LilacFlower variant={1} />
  <LilacFlower variant={2} />
</div>

<style>
  .bunch {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
  }

  .bunch :global(.flower:nth-child(1)),
  .bunch :global(.flower:nth-child(3)) {
    transform: scale(1);
  }

  .bunch :global(.flower:nth-child(2)),
  .bunch :global(.flower:nth-child(4)) {
    transform: scale(1.33);
  }

  .bunch :global(.flower:nth-child(5)),
  .bunch :global(.flower:nth-child(6)) {
    transform: scale(0.80);
  }
</style>
