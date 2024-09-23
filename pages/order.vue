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
      <tbody class="text-center">
        <tr>
          <td class="border border-gray-500 px-4 py-2">1</td>
          <td class="border border-gray-500 px-4 py-2">Item A</td>
          <td class="border border-gray-500 px-4 py-2">$10</td>
          <td class="border border-gray-500 px-4 py-2">2</td>
          <td class="border border-gray-500 px-4 py-2">Credit Card</td>
          <td class="border border-gray-500 px-4 py-2">$20</td>
          <td class="border border-gray-500 px-4 py-2"> <button class="bg-red-500 px-2 py-1 rounded-lg">on process</button></td>
        </tr>
        <tr>
          <td class="border border-gray-500 px-4 py-2">2</td>
          <td class="border border-gray-500 px-4 py-2">Item B</td>
          <td class="border border-gray-500 px-4 py-2">$15</td>
          <td class="border border-gray-500 px-4 py-2">1</td>
          <td class="border border-gray-500 px-4 py-2">PayPal</td>
          <td class="border border-gray-500 px-4 py-2">$15</td>
          <td class="border border-gray-500 px-4 py-2"><button class="bg-red-500 px-2 py-1 rounded-lg">on process</button></td>
        </tr>
        <tr>
          <td class="border border-gray-500 px-4 py-2">3</td>
          <td class="border border-gray-500 px-4 py-2">Item C</td>
          <td class="border border-gray-500 px-4 py-2">$8</td>
          <td class="border border-gray-500 px-4 py-2">3</td>
          <td class="border border-gray-500 px-4 py-2">Cash</td>
          <td class="border border-gray-500 px-4 py-2">$24</td>
          <td class="border border-gray-500 px-4 py-2"><button class="bg-red-500 px-2 py-1 rounded-lg">on process</button></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {};
</script>
<style></style>
