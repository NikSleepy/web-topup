<template>
  <div class="text-white text-3xl w-full">
    <div v-for="label in item.orders">
      <div class="flex gap-4">
        <p>{{ label.no }}</p>
        <p>{{ label.label }}</p>
      </div>

      <div v-for="input in label.inputs">
        <p>{{ label.type }}</p>
        <input
          v-if="label.type !== 'select'"
          :type="label.type"
          :id="input.id"
          v-model="formData[input.id]"
          :required="input.required"
          :placeholder="input.placeholder"
        />

        <select
          v-else
          :name="input.category"
          :id="input.id"
          v-model="formData[input.id]"
        >
          <option
            v-for="option in input.category"
            :key="option"
            :value="option"
          >
            <p>{{ option.name }}</p>
          </option>
        </select>
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
    };
  },
  mounted() {
    const id = parseInt(this.$route.params.id);
    this.item = data[id - 1];
    this.index = id;
  },
};
</script>
