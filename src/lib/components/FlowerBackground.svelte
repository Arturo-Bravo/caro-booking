<script lang="ts">
  import FlowerBunch from './FlowerBunch.svelte';
  
  // Positions for the flower bunches (top, right, bottom, left)
  const positions = [
    // Top edge - 10 bunches
    { top: '0', left: '5%', transform: 'rotate(27deg)' },
    { top: '0', left: '15%', transform: 'rotate(-14deg)' },
    { top: '0', left: '25%', transform: 'rotate(33deg)' },
    { top: '0', left: '35%', transform: 'rotate(-8deg)' },
    { top: '0', left: '45%', transform: 'rotate(19deg)' },
    { top: '0', left: '55%', transform: 'rotate(-22deg)' },
    { top: '0', left: '65%', transform: 'rotate(7deg)' },
    { top: '0', left: '75%', transform: 'rotate(31deg)' },
    { top: '0', left: '85%', transform: 'rotate(-17deg)' },
    { top: '0', left: '95%', transform: 'rotate(25deg)' },
    
    // Right edge - 8 bunches
    { top: '5%', right: '0', left: 'auto', transform: 'rotate(82deg)' },
    { top: '15%', right: '0', left: 'auto', transform: 'rotate(103deg)' },
    { top: '25%', right: '0', left: 'auto', transform: 'rotate(91deg)' },
    { top: '35%', right: '0', left: 'auto', transform: 'rotate(87deg)' },
    { top: '50%', right: '0', left: 'auto', transform: 'rotate(98deg)' },
    { top: '65%', right: '0', left: 'auto', transform: 'rotate(82deg)' },
    { top: '80%', right: '0', left: 'auto', transform: 'rotate(107deg)' },
    { top: '95%', right: '0', left: 'auto', transform: 'rotate(93deg)' },
    
    // Bottom edge - 10 bunches
    { bottom: '0', left: '5%', top: 'auto', transform: 'rotate(187deg)' },
    { bottom: '0', left: '15%', top: 'auto', transform: 'rotate(173deg)' },
    { bottom: '0', left: '25%', top: 'auto', transform: 'rotate(162deg)' },
    { bottom: '0', left: '35%', top: 'auto', transform: 'rotate(178deg)' },
    { bottom: '0', left: '45%', top: 'auto', transform: 'rotate(193deg)' },
    { bottom: '0', left: '55%', top: 'auto', transform: 'rotate(167deg)' },
    { bottom: '0', left: '65%', top: 'auto', transform: 'rotate(182deg)' },
    { bottom: '0', left: '75%', top: 'auto', transform: 'rotate(197deg)' },
    { bottom: '0', left: '85%', top: 'auto', transform: 'rotate(173deg)' },
    { bottom: '0', left: '95%', top: 'auto', transform: 'rotate(188deg)' },
    
    // Left edge - 8 bunches
    { top: '5%', left: '0', transform: 'rotate(278deg)' },
    { top: '15%', left: '0', transform: 'rotate(291deg)' },
    { top: '25%', left: '0', transform: 'rotate(267deg)' },
    { top: '35%', left: '0', transform: 'rotate(282deg)' },
    { top: '50%', left: '0', transform: 'rotate(263deg)' },
    { top: '65%', left: '0', transform: 'rotate(277deg)' },
    { top: '80%', left: '0', transform: 'rotate(292deg)' },
    { top: '95%', left: '0', transform: 'rotate(268deg)' },
    
    // Corners - 4 extra bunches
    { top: '0', left: '0', transform: 'rotate(37deg)' },
    { top: '0', right: '0', left: 'auto', transform: 'rotate(-53deg)' },
    { bottom: '0', left: '0', top: 'auto', transform: 'rotate(142deg)' },
    { bottom: '0', right: '0', left: 'auto', top: 'auto', transform: 'rotate(-128deg)' }
  ];
</script>

<div class="background">
  {#each positions as pos, i}
    <div 
      class="flower-bunch" 
      style="top: {pos.top}; left: {pos.left}; right: {pos.right}; bottom: {pos.bottom}; transform: {pos.transform}"
    >
      <FlowerBunch />
    </div>
  {/each}
</div>

<style>
  .background {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--background-color);
    z-index: -1;
    overflow: hidden;
  }
  
  .flower-bunch {
    position: absolute;
    z-index: 1;
    transform-origin: center;
  }
</style>
