<script setup lang="ts">
import IconCalendar from '@/components/icons/IconCalendar.vue'
import IconMap from '@/components/icons/IconMap.vue'
import type { Job } from '@/types/jobs.ts'
import { formatDate } from '@/lib/helper'

defineProps<{ job: Job }>()
</script>

<template>
  <div class="grid grid-cols-[auto_1fr] gap-8 border-solid border border-gray-300 p-4">
    <div
      class="grid place-items-center h-12 w-12 bg-yellow-300 rounded-full font-extrabold text-2xl"
    ></div>
    <div class="grid gap-3">
      <p class="text-xl font-semibold">{{ job.headline }}</p>
      <p>{{ job.description }}</p>
      <p class="flex gap-3"><IconMap class="h-6 w-6" /> {{ job.location.name }}</p>
      <p data-cy="date" class="flex gap-3">
        <IconCalendar class="h-6 w-6" /> Date Posted: {{ formatDate(job.date_added) }}
      </p>
      <p>Job type: {{ job.classification.name }}</p>
    </div>
  </div>
</template>
