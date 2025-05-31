<template>
  <footer class="bg-white text-gray-800 py-6 px-4 dark:bg-gray-900 dark:text-white">
    <div class="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center">
      <!-- Company Name -->
      <h3 class="text-xl font-bold font-mono mb-4 sm:mb-0">CarTrader</h3>

      <!-- Social Media Icons -->
      <div class="flex space-x-4">
        <a href="https://facebook.com" target="_blank" class="hover:text-yellow-500 transition">
          <i class="fab fa-facebook-f"></i>
        </a>
        <a href="https://twitter.com" target="_blank" class="hover:text-yellow-500 transition">
          <i class="fab fa-twitter"></i>
        </a>
        <a href="https://instagram.com" target="_blank" class="hover:text-yellow-500 transition">
          <i class="fab fa-instagram"></i>
        </a>
      </div>
    </div>
  </footer>
</template>

<script setup>
import '@fortawesome/fontawesome-free/css/all.min.css'
</script>

<style scoped>


i {
  font-size: 1.25rem;
}
</style>
