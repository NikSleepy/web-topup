<template>
  <div class="w-full flex flex-col px-32">
    <div class="w-full flex justify-start items-center gap-4 text-white">
      <font-awesome-icon :icon="['fas', 'gamepad']" size="3x" color="#FDE047" />
      <p class="text-3xl font-bold">All Game</p>
    </div>

    <div class="flex flex-wrap gap-4 py-6 px-2 text-white">
      <div
        class="w-44 h-auto flex flex-col items-center gap-2"
        v-for="item in data"
        @click="orderGame(item.id)"
      >
        <img
          :src="`/icons/${item.img}`"
          alt="wuwe"
          class="w-full h-full bg-cover bg-center rounded-md cursor-pointer"
        />
        <p>{{ item.name }}</p>
      </div>
    </div>
  </div>
</template>
<script>
import data from '@/mocks/games.json';
import { useRouter } from '#app';

export default {
  data() {
    return {
      data,
    };
  },
  methods: {
    orderGame(id) {
      const router = useRouter();
      router.push(`/games/${id}`);
    }
  }
};
</script>
