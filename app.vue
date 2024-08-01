<template>
  <div class="w-screen bg-[#12182C]">
    <nav class="h-20 flex justify-between items-center px-32 bg-[#162140] z-50">
      <div class="h-full w-[58%] flex justify-between items-center ">
        <div
          class="h-full w-32 bg-cover bg-center"
          style="background-image: url('/img/logo-topup.png')"
        ></div>
        <div class="w-3/4 h-full py-4">
          <input
            type="text"
            class="h-full w-full pl-5 pr-4 rounded-xl"
            placeholder="Search..."
          />
        </div>
      </div>
      <div class="w-[45%] flex gap-12 text-white justify-end items-center ">
        <NuxtLink to="/">
          <div class="flex gap-2 font-semibold">
            
            <HomeModernIcon class="h-6 w-6"/>
            <p>Home</p>
          </div>
        </NuxtLink>
        <NuxtLink to="/order">
          <div class="flex gap-2 font-semibold">
            <MagnifyingGlassIcon class="h-6 w-6"/>
            <p>Lacak Pesanan</p>
          </div>
        </NuxtLink>

        <div class="relative">
          <img
            @click="toggleDropdown"
            src="/img/foto-me.jpg"
            alt="Profile"
            class="h-10 w-10 rounded-full cursor-pointer"
          />
          <div
            v-if="dropdownOpen"
            class="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-50"
          >
            <a
              href="#"
              class="block px-4 py-2 text-gray-800 hover:bg-gray-100"
              @click="goToProfile"
              >Profil</a
            >
            <a
              href="#"
              class="block px-4 py-2 text-gray-800 hover:bg-gray-100"
              @click="goToOrderHistory"
              >Riwayat Pesanan</a
            >
            <a
              href="#"
              class="block px-4 py-2 text-gray-800 hover:bg-gray-100"
              @click="logout"
              >Logout</a
            >
          </div>
        </div>
      </div>
    </nav>
    <div >
      <NuxtPage />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { HomeModernIcon } from '@heroicons/vue/24/solid';
import { MagnifyingGlassIcon } from '@heroicons/vue/24/outline';
const dropdownOpen = ref(false);
const router = useRouter();

const toggleDropdown = () => {
  dropdownOpen.value = !dropdownOpen.value;
};

const goToProfile = () => {
  dropdownOpen.value = false;
  router.push('/profile');
};
const goToOrderHistory = () => {
  dropdownOpen.value = false;
  router.push('/order-history');
};

const logout = () => {
  dropdownOpen.value = false;
  // Tambahkan logika logout di sini
};
</script>
