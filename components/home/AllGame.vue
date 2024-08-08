<template>
  <div class="w-full flex flex-col px-32">
    <div class="w-full flex justify-start items-center gap-4 text-white ">
        <font-awesome-icon :icon="['fas', 'gamepad']"  size="3x" color="#FDE047"/>
        <p class="text-3xl font-bold">All Game</p>
    </div>

    <div class="w-full flex flex-wrap  gap-4 py-6 text-white bg-red-500">
      <div class="w-44 h-auto flex flex-col items-center gap-2" v-for="item in data">
        <img
          :src="`/icons/${item.img}`"
          alt="wuwe"
          class="w-full h-full bg-cover bg-center rounded-md"
        />
        <p>{{  item.name  }}</p>
      </div>
    </div>
  </div>
</template>
<script>
import data from '@/mocks/games.json'
export default {
  data() {
    return {
      data
    }
  }
};
</script>
