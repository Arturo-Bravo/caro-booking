<script lang="ts">
  export let variant = 0; // 0: original, 1: variation 1
  const variationClass = `variation-${variant}`;
</script>

<div class="flower {variationClass}">
  <div class="petal"></div>
  <div class="petal"></div>
  <div class="petal"></div>
  <div class="petal"></div>
  <div class="shadow"></div>
  <div class="center"></div>
</div>

<style>
  .flower {
    position: relative;
    width: 100px;
    height: 100px;
    margin: 20px;
    z-index: 1;
  }

  .flower.variation-0 {
    --petal-color: #cc95f0;
    --petal-radius: 50% 50% 50% 50% / 55% 55% 65% 65%;
  }

  .flower.variation-1 {
    --petal-color: #ffffff;
    --petal-radius: 50% 50% 50% 50% / 50% 50% 70% 70%;
  }

  .petal {
    position: absolute;
    width: 40px;
    height: 60px;
    background: var(--petal-color);
    border-radius: var(--petal-radius);
    top: 3px;
    left: 30px;
    transform-origin: 50% 76%;
  }

  .petal:nth-child(1) { transform: rotate(0deg) translateY(-20px); }
  .petal:nth-child(2) { transform: rotate(90deg) translateY(-20px); }
  .petal:nth-child(3) { transform: rotate(180deg) translateY(-20px); }
  .petal:nth-child(4) { transform: rotate(270deg) translateY(-20px); }

  .shadow {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 1;
  }

  .shadow::before,
  .shadow::after {
    content: '';
    position: absolute;
    background: rgba(85, 26, 139, 0.8);
    filter: blur(12px);
    box-shadow: 0 0 15px rgba(85, 26, 139, 0.5);
  }

  .shadow::before {
    width: 100%;
    height: 6px;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
  }

  .shadow::after {
    width: 6px;
    height: 100%;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
  }

  .petal {
    position: absolute;
    width: 40px;
    height: 60px;
    background: var(--petal-color); /* variation 1: lighter purple, variation 2: more pink */
    border-radius: var(--petal-radius); /* variation 1: same shape, variation 2: more rounded */
    top: 3px;
    left: 30px;
    transform-origin: 50% 76%;
  }

  .petal::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 1px;
    background: rgba(85, 26, 139, 0.8);
    top: 50%;
    left: 0;
    transform: rotate(90deg);
    filter: blur(1px);
  }

  .petal:nth-child(1) { transform: rotate(0deg) translateY(-20px); }
  .petal:nth-child(2) { transform: rotate(90deg) translateY(-20px); }
  .petal:nth-child(3) { transform: rotate(180deg) translateY(-20px); }
  .petal:nth-child(4) { transform: rotate(270deg) translateY(-20px); }

  .center {
    position: absolute;
    width: 12px;
    height: 12px;
    background: #ffeb3b;
    border-radius: 50%;
    top: 43px;
    left: 44px;
    z-index: 3;
  }
</style>
