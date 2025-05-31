<template>
<div :class="{dark: isDark}">
  <NuxtLayout class="min-h-screen bg-white text-black dark:bg-gray-900 dark:text-white">
    <NuxtPage />
  </NuxtLayout>
</div>
</template>


<script setup>
import { watch, onMounted } from 'vue'

const isDark = useState('dark-mode', () => false)

onMounted(() => {
  // Initialize dark mode from localStorage
  const savedTheme = localStorage.getItem('theme')
  if (savedTheme === 'dark') {
    isDark.value = true
    document.documentElement.classList.add('dark')
  } else {
    isDark.value = false
    document.documentElement.classList.remove('dark')
  }
})

// Watch for theme changes and update localStorage and <html> class
watch(isDark, (value) => {
  localStorage.setItem('theme', value ? 'dark' : 'light')
  document.documentElement.classList.toggle('dark', value)
})
</script>
