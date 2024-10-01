<template>
  <div class="w-screen h-auto flex justify-center items-center py-16">
    <form
      class="w-[35%] h-auto flex flex-col justify-center items-center gap-4 bg-[#162140] text-xl p-10 rounded-xl"
      @submit.prevent="handleLogin"
    >
      <p class="text-3xl font-bold text-white my-2">Login</p>
      <div class="w-full flex flex-col gap-4">
        <label class="text-white">Email</label>
        <input type="text" class="w-full h-10 rounded-md p-2" v-model="email"/>
      </div>
      <div class="w-full flex flex-col gap-4">
        <label class="text-white">Password</label>
        <input type="password" class="w-full h-10 rounded-md p-2" v-model="password"/>
      </div>

      <div class="w-full flex justify-center mt-4">
        <button class="w-[60%] h-10 bg-yellow-400 rounded-full mt-4">
          Login
        </button>
      </div>

      <p class="text-white text-sm">
        Don't have an account?<a
          href="/register"
          class="text-yellow-400 underline"
        >
          Register</a
        >
      </p>
    </form>
  </div>
</template>
<script setup>
    import { ref } from 'vue';
    import axios from 'axios';
    import { useRouter } from 'vue-router';

    const email = ref('');
    const password = ref('');
    const router = useRouter();

    const handleLogin = async () => {
        try {
          const response = await axios.post('http://localhost:5000/api/login', {
            email: email.value,
            password: password.value
          }, {
            withCredentials: true
          });

          router.push('/');
        } catch (error) {
          console.log({
            message: 'gagal fetch data',
            error: error
          })
        }
    };

</script>
<style></style>
