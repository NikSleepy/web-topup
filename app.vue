<template>
  <div class="w-screen h-auto bg-[#12182C] overflow-hidden">
    <nav
      class="w-full h-20 flex justify-between items-center px-32 bg-[#162140] z-50 fixed "
    >
      <div class="h-full w-[58%] flex justify-between items-center">
        <div
          class="h-full w-32 bg-cover bg-center cursor-pointer"
          style="background-image: url('/img/logo-topup.png')"
          @click="goToHome"
        ></div>
        <div class="w-3/4 h-full py-4">
          <input
            type="text"
            class="h-full w-full pl-5 pr-4 rounded-xl"
            placeholder="Search..."
          />
        </div>
      </div>
      <div class="w-[45%] flex gap-12 text-white justify-end items-center">
        <NuxtLink to="/">
          <div class="flex gap-2 font-semibold">
            <HomeModernIcon class="h-6 w-6" />
            <p>Home</p>
          </div>
        </NuxtLink>
        <NuxtLink to="/order">
          <div class="flex gap-2 font-semibold">
            <MagnifyingGlassIcon class="h-6 w-6" />
            <p>Lacak Pesanan</p>
          </div>
        </NuxtLink>

        <div class="relative">
          <img
            v-show="!dropdownOpen"
            @click="toggleDropdown"
            src="/img/foto-me.jpg"
            alt="Profile"
            class="h-10 w-10 rounded-full cursor-pointer"
          />

          <div
            v-show="dropdownOpen"
            class="h-10 w-10 rounded-full cursor-pointer"
            @click="toggleDropdown"
          >
            <XMarkIcon />
          </div>
          <div
            v-if="dropdownOpen"
            class="absolute right-0 mt-2 w-48 bg-[#20305d] text-white rounded-lg shadow-lg py-2 z-50"
          >
            <a
              href="/"
              class="block px-4 py-2 hover:bg-white hover:text-[#162140]"
              >Profil</a
            >
            <a
              href="/order"
              class="block px-4 py-2 hover:bg-white hover:text-[#162140]"
              >Riwayat Pesanan</a
            >
            <a
              href="/login"
              class="block px-4 py-2 hover:bg-white hover:text-[#162140]"
              >Logout</a
            >
          </div>
        </div>
      </div>
    </nav>
    <div class="w-full h-auto mt-28">
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </div>
    <footer class="w-full h-auto text-white text-lg">
      <div class="w-full h-auto bg-[#162140] flex justify-between py-10 px-32">
        <div class="w-[45%] grid gap-4">
          <p class="font-semibold">PT. Nikri Jaya Abadi</p>
          <p>Platform Top Up Game, Cepat dan Terpercaya</p>
          <p>Jl. Sasakpanjang No. 9, Teknogoli, Depok, Jawa Barat</p>
          <p class="mt-8">
            Copyright © 2023 PT. Nikri Jaya Abadi -
            <span class="text-yellow-300">NikTop Official.</span> All rights
            reserved.
          </p>
        </div>
        <div class="w-[50%]">
          <strong>Informasi</strong>

          <div class="flex gap-10 mt-4">
            <div class="w-[20%]">
              <a href="/" class="block mt-2">Tentang Kami</a>
              <a href="/" class="block mt-2">Kebijakan Privasi</a>
              <a href="/" class="block mt-2">Kontak Kami</a>
            </div>
            <div class="w-[20%]">
              <a href="/" class="block mt-2">FAQ</a>
              <a href="/" class="block mt-2">Syarat dan Ketentuan</a>
              <a href="/" class="block mt-2">Hubungi Kami</a>
            </div>
            <div class="w-[20%]">
              <a href="/" class="block mt-2">Blog</a>
              <a href="/" class="block mt-2">Kebijakan Layanan</a>
            </div>
            <div class="w-[20%]">
              <img
                src="/icons/customer-service.png"
                alt="customer"
                class="w-full transition hover:scale-110 ease-in-out duration-300 delay-150 cursor-pointer"
                @click="waMe"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { HomeModernIcon, XMarkIcon } from '@heroicons/vue/24/solid';
import { MagnifyingGlassIcon } from '@heroicons/vue/24/outline';
import { XCircleIcon } from '@heroicons/vue/24/solid';
const dropdownOpen = ref(false);
const router = useRouter();

const toggleDropdown = () => {
  dropdownOpen.value = !dropdownOpen.value;
};

const goToHome = () => {
  router.push('/');
};

const waMe = () => {
  window.open('https://wa.me/628986969322');
};
</script>
