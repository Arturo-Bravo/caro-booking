<script lang="ts">
  import LilacFlower from './LilacFlower.svelte';
</script>

<div class="background">
  <LilacFlower />
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
    background-color: #ece4f5;
    z-index: 1;
  }
</style>
