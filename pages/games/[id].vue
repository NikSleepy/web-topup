<template>
  <div class="w-full flex justify-between px-32 pb-6 text-white">
    <div class="w-[40%] h-auto">
      <div
        class="w-full h-auto flex flex-col items-center px-4 gap-4 bg-[#3B4158] mt-4 rounded-md py-6"
      >
        <img
          :src="`/icons/${item?.img}`"
          alt="icon"
          class="w-[60%] h-auto rounded-md"
        />

        <div class="w-full h-auto flex flex-col items-center gap-4">
          <p class="text-3xl font-bold">{{ item.name }}</p>

          <p class="w-[85%] text-justify text-md md:text-lg">
            NikTop hadir sebagai solusi terpercaya untuk top-up game favoritmu.
            Dengan proses yang cepat dan aman, kamu bisa mendapatkan diamond
            atau voucher game hanya dengan beberapa langkah mudah. Di NikTop,
            kami menawarkan harga yang terjangkau serta berbagai metode
            pembayaran untuk kenyamananmu. Selain itu, selama bulan ini, kamu
            bisa menikmati promo spesial dengan bonus diamond dan diskon hingga
            20% pada setiap transaksi top-up. Jangan lewatkan kesempatan ini
            untuk meningkatkan pengalaman bermain game kamu dengan lebih seru
            dan praktis. Segera top-up di NikTop dan nikmati layanan terbaik
            dari kami!
          </p>
        </div>
      </div>
    </div>
    <div class="w-[55%] flex flex-col p-4 items-center justify-center gap-6">
      <div
        v-for="label in item.orders"
        class="w-full h-auto flex flex-col bg-[#3B4158] p-6 gap-5 rounded-md"
      >
        <div class="flex gap-4 items-center">
          <div
            class="w-10 h-10 flex justify-center items-center rounded-full bg-yellow-400"
          >
            <p class="text-xl font-bold">{{ label.no }}</p>
          </div>
          <label class="text-xl font-semibold">{{ label.label }}</label>
        </div>

        <div
          v-if="label.type !== 'payments'"
          class="flex flex-wrap gap-4 h-auto"
          :class="label.type !== 'sections' && 'flex-col'"
        >
          <div
            v-for="input in label.inputs"
            :key="input.id"
            class="flex"
            :class="label.type == 'sections' ? 'w-[20%]' : 'w-full'"
          >
            <input
              v-if="label.type !== 'sections'"
              :type="label.type"
              :id="input.id"
              v-model="formData[input.id]"
              :required="input.required"
              :placeholder="input.placeholder"
              class="w-full h-10 flex p-2 rounded-md text-black"
            />

            <div
              v-else
              class="w-full h-auto flex flex-col justify-center items-center text-center gap-2 border rounded-md cursor-pointer p-2"
              :class="{
                'border-blue-500 bg-[#12182C] ':
                  selectedCategory['category'] === input,
              }"
              
              @click="selectedCategory['category'] = input"
            >
              <div class="w-[60%] flex justify-center items-center mt-2">
                <img
                  :src="`/icons/${input?.img}`"
                  alt="icons"
                  class="rounded-md"
                />
              </div>
              <p>{{ input.name }}</p>
            </div>
          </div>

          <div
            v-show="label.type === 'sections'"
            class="w-full h-auto flex flex-wrap gap-4 mt-6"
          >
            <div
              v-for="option in selectedCategory.category?.options"
              class="w-[22%] h-auto flex flex-col justify-center items-center border rounded-md cursor-pointer p-2 text-center text-sm"
              :class="{
                'border-blue-500 bg-[#12182C] ':
                  formData['item'] === option.value,
              }"
              :key="option.id"
              @click="inputItem(option)"
            >
              <div class="w-[60%] flex justify-center items-center my-2">
                <img
                  :src="`/icons/${option?.img}`"
                  alt="icons"
                  class="rounded-md"
                />
              </div>
              <p>{{ option.value }}</p>
              <strong>{{ numberToRupiah(option.price) }}</strong>
            </div>
          </div>
        </div>

        <!-- payment input -->
        <div v-else class="flex flex-col gap-4 h-auto">
          <div
            v-for="input in label.inputs"
            :key="input.id"
            class="w-full h-auto flex flex-wrap gap-2"
          >
            <div
              class="w-[60%] h-10 flex justify-center items-center border rounded-md cursor-pointer"
              :class="{
                'border-blue-500 bg-[#12182C]  ':
                  topup['type_payment'] === input,
              }"
              @click="topup['type_payment'] = input"
            >
              <p>{{ input.name }}</p>
            </div>

            <div
              v-show="topup['type_payment'] === input"
              class="w-full h-auto flex flex-wrap gap-4 px-4"
            >
              <div
                v-for="option in topup.type_payment?.options"
                :key="option.id"
                class="w-[20%] h-10 flex justify-center items-center border rounded-md cursor-pointer"
                :class="{
                  'border-blue-500 bg-[#12182C]':
                    formData['payment'] === option.value,
                }"
                @click="formData['payment'] = option.value"
              >
                <p>{{ option.value }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <p v-if="errorMessages" class="text-red-500">
        {{ errorMessages }}
      </p>

      <div class="w-full flex justify-end">
        <button
          class="w-[40%] h-10 flex justify-center items-center bg-yellow-400 rounded-md"
          @click="openModal"
        >
          Order
        </button>
      </div>
    </div>

    <!-- Modal -->
    <div
      v-if="isModalOpen"
      class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
    >
      <div class="bg-yellow-400 text-black p-6 rounded-lg shadow-lg w-[25%]">
        <h2 class="text-2xl font-bold mb-4">Order Confirmation</h2>
        <ul class="mb-4 flex flex-col gap-2">
          <li>
            <div class="w-full flex justify-between">
              <strong>UID:</strong> {{ formData['uid'] }}
            </div>
          </li>
          <li>
            <div class="w-full flex justify-between">
              <strong>Server:</strong> {{ formData['server'] }}
            </div>
          </li>
          <li>
            <div class="w-full flex justify-between">
              <strong>Name:</strong> {{ formData['item'] }}
            </div>
          </li>
          <li>
            <div class="w-full flex justify-between">
              <strong>Price:</strong> {{ numberToRupiah(formData['price']) }}
            </div>
          </li>
          <li>
            <div class="w-full flex justify-between">
              <strong>Quantity:</strong> {{ formData['quantity'] }}
            </div>
          </li>
          <li>
            <div class="w-full flex justify-between">
              <strong>Whatsapp:</strong> {{ formData['whatsapp'] }}
            </div>
          </li>
          <li>
            <div class="w-full flex justify-between">
              <strong>Methods Payment:</strong> {{ formData['payment'] }}
            </div>
          </li>
          <li>
            <div class="w-full flex justify-between border-t-2 border-black">
              <strong>Total:</strong>
              <strong>{{ numberToRupiah(totalPrice()) }}</strong>
            </div>
          </li>
        </ul>
        <div class="flex justify-end gap-4">
          <button
            @click="closeModal"
            class="bg-red-500 text-white px-4 py-2 rounded-md"
          >
            Close
          </button>
          <button
            @click="order"
            class="bg-blue-500 text-white px-4 py-2 rounded-md"
          >
            Order Now
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import data from '@/mocks/inputTopup.json';
import { numberToRupiah } from '../../utils/currency';
import axios from 'axios';

export default {
  data() {
    return {
      item: {},
      index: null,
      isModalOpen: false,
      formData: {},
      selectedCategory: {},
      topup: {},
      errorMessages: '',
    };
  },
  mounted() {
    const id = parseInt(this.$route.params.id);
    this.item = data[id - 1];
    this.index = id;
    console.log(this.formData);
  },
  watch: {
    formData: {
      deep: true, // Memantau perubahan dalam semua properti dalam formData
      handler(newVal) {
        console.log('formData updated:', newVal);
      },
    },
    selectedCategory: {
      deep: true, // Memantau perubahan dalam semua properti dalam formData
      handler(newVal) {
        console.log('selectedCategory updated:', newVal);
      },
    },
    topup: {
      deep: true, // Memantau perubahan dalam semua properti dalam formData
      handler(newVal) {
        console.log('selectedCategory updated:', newVal);
      },
    },
  },
  methods: {
    inputItem(options) {
      this.formData['item'] = options.value;
      this.formData['price'] = options.price;
    },
    totalPrice() {
      const price = this.formData['price'];
      const quantity = this.formData['quantity'];
      const total = price * quantity;
      return total;
    },
    openModal() {
      if (!this.validateForm()) {
        this.errorMessages = 'Please fill in all required fields';
        return;
      }

      this.errorMessages = '';
      this.isModalOpen = true;
    },
    closeModal() {
      this.isModalOpen = false;
    },
    async order() {
      try {
        this.isModalOpen = false;
        const response = await axios.post('http://localhost:5000/api/orders', this.formData);
        console.log(response.data.data);
        this.$router.push('/');
      } catch (error) {
        console.error('Error submitting form:', error);
      }
    },
    validateForm() {
      // Cek apakah input di formData kosong
      for (let key in this.formData) {
        if (!this.formData[key]) {
          return false; // Jika ada input yang kosong, return false
        }
      }

      // Cek apakah 'item' dan 'payment' sudah dipilih
      if (!this.formData['item'] || !this.formData['payment']) {
        return false;
      }

      return true; // Semua input terisi
    },
  },
};
</script>
