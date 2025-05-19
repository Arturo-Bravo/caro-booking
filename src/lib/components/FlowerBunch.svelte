<script lang="ts">
  import LilacFlower from './LilacFlower.svelte';
  
  // Static positions within a 100px by 200px box
  const positions = [
    { x: -20, y: -50 },  // top-left
    { x: 30, y: 80 },    // bottom-right
    { x: -40, y: 100 },  // bottom-left
    { x: 10, y: -30 },   // top-right
    { x: -15, y: 20 },   // center-left
    { x: 25, y: -10 }    // center-right
  ];

  const flowers = [
    { id: 0, variant: 0, position: positions[0] },
    { id: 1, variant: 1, position: positions[1] },
    { id: 2, variant: 2, position: positions[2] },
    { id: 3, variant: 0, position: positions[3] },
    { id: 4, variant: 1, position: positions[4] },
    { id: 5, variant: 2, position: positions[5] }
  ];
</script>

<div class="bunch">
  {#each flowers as flower (flower.id)}
    <div class="flower-wrapper flower-{flower.id}">
      <LilacFlower variant={flower.variant} />
    </div>
  {/each}
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
  }

  .flower-wrapper {
    position: absolute;
    z-index: 1;
  }

  /* Flower classes */
  .flower-0 {
    transform: translate(-20px, -50px) scale(1) rotate(67deg);
  }
  .flower-1 {
    transform: translate(30px, 80px) scale(0.7) rotate(83deg);
  }
  .flower-2 {
    transform: translate(-40px, 100px) scale(0.8) rotate(5deg);
  }
  .flower-3 {
    transform: translate(10px, -30px) scale(1) rotate(22deg);
  }
  .flower-4 {
    transform: translate(-15px, 20px) scale(0.7) rotate(13deg);
  }
  .flower-5 {
    transform: translate(25px, -10px) scale(0.8) rotate(41deg);
  }
</style>
