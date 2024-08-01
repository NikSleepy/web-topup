<template>
  <div class="">
    <Promo />

    <FlashDeal/>
  </div>
</template>
<script>
import Promo from '~/components/home/Promo.vue';
import FlashDeal from '~/components/home/FlashDeal.vue';
export default {
  components: {
    Promo,
    FlashDeal
  }
}

</script>
