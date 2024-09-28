<template>
  <div class="w-screen h-auto flex justify-center items-center py-10">
    <form
      class="w-[35%] h-auto flex flex-col justify-center items-center gap-4 bg-[#162140] text-xl p-8 rounded-md"
    >
      <p class="text-3xl font-bold text-white my-2">Login</p>
      <div class="w-full flex flex-col gap-4">
        <label class="text-white">Email</label>
        <input type="text" class="w-full h-10 rounded-md" />
      </div>
      <div class="w-full flex flex-col gap-4">
        <label class="text-white">Password</label>
        <input type="text" class="w-full h-10 rounded-md" />
      </div>

      <div class="w-full flex justify-center mt-4">
        <button class="w-[50%] h-10 bg-yellow-400 rounded-full mt-4">
          Login
        </button>
      </div>

      <p>Don't have an account? </p>
    </form>
  </div>
</template>
<script setup></script>
<style></style>
