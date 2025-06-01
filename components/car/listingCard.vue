<template>
  <div
    class="dark:border shadow rounded overflow-hidden flex flex-col sm:flex-row justify-between mb-4 bg-white text-black dark:bg-gray-900 dark:text-white"
  >
    <!-- Left: Image + Info -->
    <div class="flex flex-col sm:flex-row">
      <img
        :src="`${config.public.supabase.url}/storage/v1/object/public/images/${listing.image}`"
        class="w-full sm:w-80 h-44 object-cover"
        alt="listing image"
      />
      <div class="p-3">
        <h1 class="text-xl sm:text-2xl">{{ listing.name }}</h1>
        <p class="text-blue-400">${{ listing.price }}</p>
      </div>
    </div>

    <!-- Right: Actions -->
    <div class="p-3 flex items-center justify-end space-x-4">
      <NuxtLink :to="`/profile/listing/view/${listing.id}`" class="text-blue-400">View</NuxtLink>
      <p
        @click="emits('deleteClick', listing.id)"
        class="text-red-400 cursor-pointer"
      >
        Delete
      </p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  listing: Object,
})
const emits = defineEmits(['deleteClick'])

const config = useRuntimeConfig()
</script>
