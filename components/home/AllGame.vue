<template>
  <div class="w-full h-auto flex flex-col px-32">
    <div class="flex items-center gap-4 text-white">
        <font-awesome-icon :icon="['fas', 'gamepad']"  size="3x" color="#FDE047"/>
        <p class="text-3xl font-bold">All Game</p>
    </div>

    <div class="flex flex-col gap-4 px-2 py-6 text-white">
      <div class="w-32 h-auto flex flex-col items-center gap-2">
        <img
          src="/icons/wuwe.jpeg"
          alt="wuwe"
          class="w-full h-full bg-cover bg-center rounded-md"
        />
        <p>Wuwe</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
