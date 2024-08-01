<template>
    <div>
      <p>
        {{ countdown.days }} hari {{ countdown.hours }} jam 
        {{ countdown.minutes }} menit
      </p>
    </div>
  </template>
  
  <script>
  import { onMounted, onBeforeUnmount, ref } from 'vue';
  
  export default {
    props: {
      targetDate: {
        type: String,
        required: true
      }
    },
    setup(props) {
      const countdown = ref({
        days: 0,
        hours: 0,
        minutes: 0,
      });
  
      const updateCountdown = () => {
        const now = new Date().getTime();
        const distance = new Date(props.targetDate).getTime() - now;
  
        if (distance < 0) {
          countdown.value = {
            days: 0,
            hours: 0,
            minutes: 0,
          };
          return;
        }
  
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        // const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
        countdown.value = {
          days,
          hours,
          minutes,
        //   seconds
        };
      };
  
      let interval;
      onMounted(() => {
        updateCountdown();
        interval = setInterval(updateCountdown, 1000);
      });
  
      onBeforeUnmount(() => {
        clearInterval(interval);
      });
  
      return {
        countdown
      };
    }
  };
  </script>
  