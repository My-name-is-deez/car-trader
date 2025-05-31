<template>
  <div class="even:bg-gray-100 p-4 rounded shadow-sm">
    <h1 class="font-bold text-2xl text-indigo-600 drop-shadow-sm tracking-wide">
      {{ message.name }}
    </h1>
    <p class="text-gray-700 mt-2">{{ message.message }}</p>
    <div class="flex items-center mt-4">
      <p class="text-green-700 mr-10">{{ message.email }}</p>
      <p class="text-blue-500">{{ message.phone }}</p>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  message: Object,
})
</script>
