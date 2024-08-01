<template>
  <Swiper
    :modules="modules"
    :effect="'coverflow'"
    :grabCursor="true"
    :centeredSlides="true"
    :slidesPerView="2"
    :coverflow-effect="{
      rotate: 30,
      stretch: 10,
      depth: 50,
      modifier: 1,
      slideShadows: true,
    }"
    :pagination="true"
    :navigation="true"
    :loop="true"
    :autoplay="{
      delay: 2500,
      disableOnInteraction: false,
    }"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
    style="padding-top: 50px; padding-bottom: 50px; width: 100%"
  >
    <SwiperSlide v-for="(image, index) in images" :key="index">
      <img :src="image" alt="" class="block w-full rounded-lg zoomed" />
    </SwiperSlide>
  </Swiper>
</template>
<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectCoverflow,
  Autoplay,
} from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const images = [
      '/img/promo1.png',
      '/img/promo2.png',
      '/img/promo3.png',
      '/img/promo4.png',
    ];
    const onSwiper = (swiper) => {
      // console.log(swiper);
    };
    const onSlideChange = () => {
      // console.log('slide change');
    };
    return {
      onSwiper,
      onSlideChange,
      modules: [
        Navigation,
        Pagination,
        Scrollbar,
        A11y,
        EffectCoverflow,
        Autoplay,
      ],
      images,
    };
  },
};
</script>
