<template>
  <div class="w-full flex justify-between px-32 pb-6 text-white">
    <div class="w-[40%] h-auto">
      <div>{{ formData }}</div>
    </div>
    <div class="w-[55%] flex flex-col p-4 items-center justify-center gap-6">
      <div
        v-for="label in item.orders"
        class="w-full h-auto flex flex-col bg-[#3B4158] p-6 gap-5 rounded-md"
      >
        <div class="flex gap-4 items-center">
          <div
            class="w-10 h-10 flex justify-center items-center rounded-full bg-yellow-400"
          >
            <p class="text-xl font-bold">{{ label.no }}</p>
          </div>
          <label class="text-xl font-semibold">{{ label.label }}</label>
        </div>

        <div
          v-if="label.type !== 'payments'"
          class="flex flex-wrap gap-4 h-auto"
          :class="label.type !== 'sections' && 'flex-col'"
        >
          <div v-for="input in label.inputs" class="flex">
            <input
              v-if="label.type !== 'sections'"
              :type="label.type"
              :id="input.id"
              v-model="formData[input.id]"
              :required="input.required"
              :placeholder="input.placeholder"
              class="w-full h-10 flex p-2 rounded-md text-black"
            />

            <div v-else class="w-full h-auto flex flex-col gap-2">
              <div
                class="w-72 h-10 flex justify-center items-center border rounded-md cursor-pointer"
                :class="{
                  'border-blue-500': selectedCategory['category'] === input,
                }"
                :key="input.id"
                @click="selectedCategory['category'] = input"
              >
                <p>{{ input.name }}</p>
              </div>
            </div>
          </div>

          <div
            v-show="label.type === 'sections'"
            class="w-full h-auto flex flex-wrap gap-4"
          >
            <div
              v-for="option in selectedCategory.category?.options"
              class="w-72 h-10 flex justify-center items-center border rounded-md cursor-pointer"
              :class="{
                'border-blue-500': formData['item'] === option.value,
              }"
              :key="option.id"
              @click="formData['item'] = option.value"
            >
              <p>{{ option.value }}</p>
            </div>
          </div>
        </div>

        <!-- payment input -->
        <div v-else class="flex flex-col gap-4 h-auto ">
          <div v-for="input in label.inputs" class="w-full h-auto flex flex-wrap gap-2 ">
              <div
                class="w-[60%] h-10 flex justify-center items-center border rounded-md cursor-pointer"
                :class="{
                  'border-blue-500': topup['type_payment'] === input,
                }"
                :key="input.id"
                @click="topup['type_payment'] = input"
              >
                <p>{{ input.name }}</p>
              </div>

              <div
                v-show="topup['type_payment'] === input"
                class="w-full h-auto flex flex-wrap gap-4 px-4"
              >
                <div
                  v-for="option in topup.type_payment?.options"
                  class="w-[20%] h-10 flex justify-center items-center border rounded-md cursor-pointer"
                  :class="{
                    'border-blue-500': formData['payment'] === option.value,
                  }"
                  :key="option.id"
                  @click="formData['payment'] = option.value"
                >
                  <p>{{ option.value }}</p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import data from '@/mocks/inputTopup.json';

export default {
  data() {
    return {
      item: {},
      index: null,
      formData: {},
      selectedCategory: {},
      topup: {},
    };
  },
  mounted() {
    const id = parseInt(this.$route.params.id);
    this.item = data[id - 1];
    this.index = id;
    console.log(this.formData);
  },
  watch: {
    formData: {
      deep: true, // Memantau perubahan dalam semua properti dalam formData
      handler(newVal) {
        console.log('formData updated:', newVal);
      },
    },
    selectedCategory: {
      deep: true, // Memantau perubahan dalam semua properti dalam formData
      handler(newVal) {
        console.log('selectedCategory updated:', newVal);
      },
    },
    topup: {
      deep: true, // Memantau perubahan dalam semua properti dalam formData
      handler(newVal) {
        console.log('selectedCategory updated:', newVal);
      },
    },
  },
};
</script>
