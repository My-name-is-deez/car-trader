<template>
  <div class="flex justify-center px-4 mt-6">
    <div
      class="flex w-full max-w-2xl items-center rounded-full bg-white shadow-lg overflow-hidden"
    >
      <input
        @keyup.enter="handleSearch"
        v-model="city"
        type="text"
        :class="[
          'py-2 px-4 w-full text-lg md:text-xl focus:outline-none dark:text-black rounded-l-full',
          cityError ? 'border-2 border-red-400' : ''
        ]"
        placeholder="Search by city..."
      />
      <button
        @click="handleSearch"
        class="bg-sky-500 hover:bg-sky-600 text-white px-6 py-2 text-lg md:text-xl rounded-r-full"
      >
        Search
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
const city = ref('')
const cityError = ref(false)

function handleSearch() {
  if (!city.value) {
    cityError.value = true
  } else {
    cityError.value = false
    navigateTo(`/city/${city.value}/car`)
  }
}
</script>
