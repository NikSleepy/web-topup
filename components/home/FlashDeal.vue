<template>
  <div class="w-full h-auto flex flex-col px-32 py-4">
    <div class="flex items-center gap-3 text-4xl font-bold text-white">
      <span>
        <BoltIcon class="h-12 w-12 text-yellow-300" />
      </span>
      <p>Flash Deal</p>
    </div>

    <div
      class="w-full h-full flex flex-col gap-6 p-10 my-4 border-2 border-yellow-400 rounded-lg"
    >
      <div class="flex gap-4 items-center text-gray-300 text-xl">
        <p>Berakhir Dalam</p>
        <div class="px-6 py-1 bg-red-600 text-white rounded-md">
          <CountDownTime targetDate="2024-12-31T23:59:59" />
        </div>
      </div>

      <div class="flex gap-4 items-center px-4">
        <div
        v-for="item in data"
          class="w-56 h-56 bg-cover bg-center border-2 border-yellow-400 rounded-xl"
          :style="{ backgroundImage: `url('/icons/${item.img}')` }"
          >
          <div
            class="w-full h-full flex flex-col justify-between p-2  backdrop-brightness-[0.3] text-white rounded-xl"
          >
            <div>
              <p class="text-xl font-bold">{{ item.name }}</p>
              <p class="text-lg text-gray-200">{{ item.items }}</p>
            </div>

            <div>
                <del>{{ numberToRupiah(item.price) }}</del>
                <p class="text-xl font-semibold"> {{ numberToRupiah(item.hot_promo) }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { BoltIcon } from '@heroicons/vue/20/solid';
import data from '@/mocks/flashdeal.json';
import { numberToRupiah } from '~/utils/currency';
import CountDownTime from './CountDownTime.vue';

export default {
  data() {
    return {
      data,
    };
  },
  components: {
    BoltIcon,
    CountDownTime,
  },
  methods: {
    numberToRupiah,
  },
};
</script>
<style></style>
