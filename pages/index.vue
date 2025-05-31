<template>
<div class="bg-white text-black dark:bg-gray-900 dark:text-white">
    <!--HOME HERO-->
      <CarHero/>
      <HowItWork/>
      <CarBecomeTrader/>
      <CarGoFindCar/>
      <carFooter/>
  </div>
</template>

<script setup>
import HowItWork from '~/components/car/howItWork.vue';

useHead({
  title:'CarTrader - Find Your Dream Car',
});

</script>

<style scoped>

</style>