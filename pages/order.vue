<template>
  <div class="w-screen h-auto px-32 text-white py-20">
    <div>
      <h1 class="text-3xl font-bold mb-10">Order History</h1>
    </div>
    <table class="w-full table-auto border-collapse border border-gray-500">
      <thead>
        <tr>
          <th class="border border-gray-500 px-4 py-2 bg-yellow-400">No</th>
          <th class="border border-gray-500 px-4 py-2 bg-yellow-400">Item</th>
          <th class="border border-gray-500 px-4 py-2 bg-yellow-400">Price</th>
          <th class="border border-gray-500 px-4 py-2 bg-yellow-400">
            Quantity
          </th>
          <th class="border border-gray-500 px-4 py-2 bg-yellow-400">
            Payment
          </th>
          <th class="border border-gray-500 px-4 py-2 bg-yellow-400">Total</th>
          <th class="border border-gray-500 px-4 py-2 bg-yellow-400">Status</th>
        </tr>
      </thead>
      <tbody class="text-center text-md">
        <tr v-for="(item, index) in data">
          <td class="border border-gray-500 px-4 py-2">{{ index + 1 }}</td>
          <td class="border border-gray-500 px-4 py-2">{{ item.item }}</td>
          <td class="border border-gray-500 px-4 py-2">
            {{ numberToRupiah(item.price) }}
          </td>
          <td class="border border-gray-500 px-4 py-2">{{ item.quantity }}</td>
          <td class="border border-gray-500 px-4 py-2">{{ item.payment }}</td>
          <td class="border border-gray-500 px-4 py-2">
            {{ numberToRupiah(item.price * item.quantity) }}
          </td>
          <td class="border border-gray-500 px-4 py-2">
            <button class="bg-green-500 px-2 py-1 rounded-lg">Success</button>
          </td>
        </tr>
      </tbody>
    </table>

    <!-- <div>{{ data }}</div> -->
  </div>
</template>
<script setup>
import axios from 'axios';
import { numberToRupiah } from '../utils/currency';

const data = ref([]);

const orderGame = async () => {
  try {
    const response = await axios.get('http://localhost:5000/api/orders', {
      withCredentials: true,
    });

    data.value = response.data.data;
  } catch (error) {
    console.log({
      message: 'gagal fetch data di order page',
    });
    if (error.response.status === 404) {
      window.location.href = '/login';
    }
  }
};

onMounted(() => {
  orderGame();
});
</script>
<style></style>
