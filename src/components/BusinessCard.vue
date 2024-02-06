<script setup lang="ts">
import { RouterLink } from 'vue-router'
import IconAngleRight from '@/components/icons/IconAngleRight.vue'
import type { Business } from '@/types/business'

defineProps<{
  business: Business
}>()
</script>

<template>
  <RouterLink
    :to="`/jobs/${business.id}`"
    class="grid gap-5 grid-cols-[auto_1fr_auto] p-4 hover:shadow-sm hover:cursor-pointer border-solid bg-white transition-transform hover:bg-yellow-300 hover:scale-105"
  >
    <div
      data-cy="business-avatar"
      class="grid place-items-center h-12 w-12 bg-slate-200 rounded-full font-extrabold text-2xl"
    >
      {{ business.username.charAt(0).toUpperCase() }}
    </div>
    <div>
      <p data-cy="display_name" class="font-semibold text-xl">{{ business.display_name }}</p>
      <p data-cy="username" class="text-sm text-gray-400">@{{ business.username }}</p>
    </div>
    <IconAngleRight class="text-gray-800 h-8 w-8 self-center" />
  </RouterLink>
</template>
