<template>
  <div class="text-white text-3xl w-full ">
    <p>bang</p>
    <p>{{ item.name }}</p>
    <p>{{ index }}</p>
  </div>
</template>

<script>
const data = [
  {
    name: 'PUBG',
  },
  {
    name: 'Genshin Impact',
  },
  {
    name: 'Mobile Legends',
  },
  {
    name: 'Honkai Star Rail',
  },
  {
    name: 'Call Of Duty',
  },
  {
    name: 'Free Fire',
  },
];

export default {
  data() {
    return {
      item: {},
      index: null,
    };
  },
  mounted() {
    const id = parseInt(this.$route.params.id);
    this.item = data[id - 1];
    this.index = id;
  }
};
</script>
