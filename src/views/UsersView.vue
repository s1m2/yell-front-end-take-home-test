<script setup lang="ts">
import { onMounted } from 'vue'
import UserCard from '@/components/BusinessCard.vue'
import AppNotification from '@/components/common/AppNotification.vue'
import { storeToRefs } from 'pinia'
import { useBusinessStore } from '@/stores/business'

const { businesses, isLoading, isError } = storeToRefs(useBusinessStore())
const { getBusinessesAction } = useBusinessStore()

onMounted(() => {
  getBusinessesAction()
})
</script>

<template>
  <main class="md:max-w-screen-sm md:mx-auto my-10">
    <div class="animate-pulse my-10" v-if="isLoading">
      <p>Retrieving user information....</p>
    </div>

    <AppNotification v-if="isError" type="error">
      <h4 class="font-bold">Unable to retrieve your users</h4>
      <p class="font-semibold">
        We could not connect to the server due to a technical issue on our end. Please try
        reconnecting again
      </p>
    </AppNotification>

    <AppNotification v-if="!isLoading && !businesses.length && !isError" type="info">
      <h4 class="font-bold">No legends users</h4>
      <p class="font-semibold">We could not find any users</p>
    </AppNotification>

    <template v-if="!isLoading && businesses.length">
      <h1 class="text-center text-3xl mb-10">Welcome back</h1>
      <section class="bg-slate-100 grid p-8 gap-6">
        <UserCard v-for="business in businesses" :key="business.id" :business="business" />
      </section>
    </template>
  </main>
</template>
