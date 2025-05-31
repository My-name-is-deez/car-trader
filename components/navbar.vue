<template>
  <div>
    <header
      class=" sticky top-0 z-50 flex justify-between items-center 
             space-x-1 bg-white text-black  border-yellow-500  border-b-[3px]
             dark:bg-gray-950 dark:text-white p-6 shadow-md"
    >
      <NuxtLink to="/" class="text-3xl font-mono font-bold  " >cartrader</NuxtLink>

      <div class="flex items-center gap-x-4 font-mono">
        <template v-if="user">
          <NuxtLink to="/profile/listing" class="hover:underline">Profile</NuxtLink>
          <NuxtLink to="/car/cCars" class="hover:underline">SeeCars</NuxtLink>
          <p @click="logout" class="cursor-pointer hover:underline">Logout</p>
        </template>
        <NuxtLink v-else to="/login" class="hover:underline">Login</NuxtLink>

        <button
          @click="isDark = !isDark"
          class="px-3 py-1 rounded bg-gray-300 dark:bg-gray-700 text-black dark:text-white"
        >
          {{ isDark ? 'Light Mode' : 'Dark Mode' }}
        </button>
      </div>
    </header>
  </div>
</template>



<script setup lang="ts">
const supabase= useSupabaseClient();  // supabase client
const user= useSupabaseUser();  // accseing user data
const isDark = useState('dark-mode') // dark mode state
async function logout(){ // logout function
  const{error}= await supabase.auth.signOut();
  if(!error){
    navigateTo('/');
  }else{
    console.log("Logout faild: ",error.message);
  }
}
</script>
