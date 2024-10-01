<template>
  <div class="w-screen">
    <Promo />

    <FlashDeal />

    <AllGame />
  </div>
</template>
<script>
import Promo from '~/components/home/Promo.vue';
import FlashDeal from '~/components/home/FlashDeal.vue';
import AllGame from '~/components/home/AllGame.vue';

export default {
  components: {
    Promo,
    FlashDeal,
    AllGame,
  },
};
</script>
