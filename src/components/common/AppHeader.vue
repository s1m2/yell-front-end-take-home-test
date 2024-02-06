<script setup lang="ts">
import { computed } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const isLogoutVisible = computed(() => router.currentRoute.value.path !== '/')

function logout() {
  router.push('/')
}
</script>

<template>
  <header class="border-yellow-300 p-4 border-b-4">
    <div class="flex justify-between md:max-w-screen-lg md:mx-auto">
      <h1 class="text-2xl font-semibold">Mini Yell</h1>
      <button
        v-if="isLogoutVisible"
        class="bg-yellow-300 hover:bg-yellow-100 text-slate-900 py-2 px-6"
        @click="logout"
      >
        Logout
      </button>
    </div>
  </header>
</template>
