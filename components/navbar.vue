<template>
  <div>
    <header
      class="sticky top-0 z-50 flex flex-wrap justify-between items-center 
             bg-white text-black border-yellow-500 border-b-[3px]
             dark:bg-gray-950 dark:text-white px-4 py-6 shadow-md"
    >
      <!-- Logo -->
      <NuxtLink to="/" class="text-2xl sm:text-3xl font-mono font-bold mb-2 sm:mb-0">
        cartrader
      </NuxtLink>

      <!-- Right: Links and Mode Toggle -->
      <div class="flex flex-wrap gap-3 items-center font-mono text-sm sm:text-base">
        <template v-if="user">
          <NuxtLink to="/profile/listing" class="hover:underline">Profile</NuxtLink>
          <NuxtLink to="/car/cCars" class="hover:underline">SeeCars</NuxtLink>
          <NuxtLink to="/car/favorite" class="hover:underline">favorites</NuxtLink>
          <p @click="logout" class="cursor-pointer underline">Logout</p>
        </template>
        <NuxtLink v-else to="/login" class="hover:underline">Login</NuxtLink>

        <!-- Theme Toggle -->
        <button
          @click="isDark = !isDark"
          class="px-3 py-1 rounded bg-gray-200 dark:bg-gray-700 text-black dark:text-white"
        >
          {{ isDark ? 'Light Mode' : 'Dark Mode' }}
        </button>
      </div>
    </header>
  </div>
</template>

<script setup lang="ts">
const supabase = useSupabaseClient()
const user = useSupabaseUser()
const isDark = useState('dark-mode')

async function logout() {
  const { error } = await supabase.auth.signOut()
  if (!error) {
    navigateTo('/')
  } else {
    console.log('Logout failed:', error.message)
  }
}
</script>
