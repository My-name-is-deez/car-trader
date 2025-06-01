<template>
  <div class="mt-10 px-4">
    <div
      class="max-w-2xl mx-auto flex flex-col gap-4 dark:text-black"
    >
      <!-- Name / Email / Phone Inputs -->
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <input
          v-model="message.name"
          class="border p-2 rounded dark:text-black w-full"
          placeholder="Name"
          type="text"
        />
        <input
          v-model="message.email"
          class="border p-2 rounded dark:text-black w-full"
          placeholder="Email"
          type="text"
        />
        <input
          v-model="message.phone"
          class="border p-2 rounded dark:text-black w-full"
          placeholder="Phone"
          type="text"
        />
      </div>

      <!-- Message Textarea -->
      <textarea
        v-model="message.message"
        class="border p-2 rounded w-full h-32 dark:text-black"
        placeholder="Message"
      ></textarea>

      <!-- Submit Button -->
      <button
        :disabled="disabledButton"
        @click="onSubmit"
        class="text-white bg-blue-500 px-6 py-3 rounded disabled:opacity-50"
      >
        Submit
      </button>

      <!-- Messages -->
      <p v-if="errorMessage" class="text-red-500">{{ errorMessage }}</p>
      <p v-if="successMessage" class="text-green-500">{{ successMessage }}</p>
    </div>
  </div>
</template>

<script setup>
const message = ref({
  name: '',
  email: '',
  phone: '',
  message: ''
})
const successMessage = ref('')
const errorMessage = ref('')
const route = useRoute()

const disabledButton = computed(() => {
  return Object.values(message.value).some((field) => !field)
})

async function onSubmit() {
  try {
    await $fetch(`/api/car/listings/${route.params.id}/messages`, {
      method: 'POST',
      body: message.value
    })
    message.value = { name: '', email: '', phone: '', message: '' }
    successMessage.value = 'Message sent successfully!'
    errorMessage.value = ''
  } catch (err) {
    errorMessage.value =
      err.statusMessage || 'Something went wrong, please try again later.'
    successMessage.value = ''
  }
}
</script>
