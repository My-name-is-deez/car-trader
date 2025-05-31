<template>
    <div class="mt-10">
        <h1 class="text-5xl font-bold mb-7">Log in</h1>
        <button 
        @click="login"
         class="bg-red-400 p-3 rounded text-white font-bold">
         Login with Google</button>
    </div>
</template>

<script setup>

const supabase= useSupabaseClient();

async function login(){  // login function
    const {error}=supabase.auth.signInWithOAuth({
        provider:"google",
    });
    if(error){
        console.log(error);
    }
    console.log("Login success");
}

const user= useSupabaseUser();  // accseing user data


definePageMeta({
    layout: 'custom',
   
})
useHead({
  title:'Login page',
});

</script>