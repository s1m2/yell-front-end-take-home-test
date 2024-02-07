<script setup lang="ts">
import { onMounted, ref, computed } from 'vue'
import { storeToRefs } from 'pinia'
import { useRoute } from 'vue-router'
import JobCard from '@/components/JobsViewComponents/JobCard.vue'
import AppLoader from '@/components/JobsViewComponents/AppLoader.vue'
import { useBusinessStore } from '@/stores/business'

const { getJobsAction } = useBusinessStore()
const { jobs, isLoading, isError, selectedBusiness, selectedBusinessId } = storeToRefs(useBusinessStore())

const searchValue = ref('')

const filteredJobs = computed(() => {
  return jobs.value.filter((job) => {
    return job.headline.toLowerCase().includes(searchValue.value.toLowerCase())
  })
})

onMounted(() => {
  selectedBusinessId.value = Number(useRoute().params.id)
  getJobsAction(Number(useRoute().params.id))
})
</script>

<template>
  
  <main class="mx-4 md:max-w-screen-lg md:mx-auto mb-20">
    <input type="text" v-model="searchValue" class="w-full p-2 mt-5 border-solid border border-gray-300" placeholder="Quickly serach for a job......"/>
    <p class="text-2xl my-4">Jobs for : {{ selectedBusiness?.display_name }} Company</p>
    <p class="border-b pb-4 border-gray-300">Here are the jobs available</p>
    <AppLoader class="my-10" v-if="isLoading" />

    <AppNotification v-if="isError" type="error">
      <h4 class="font-bold">Unable to retrieve your jobs</h4>
      <p class="font-semibold">
        We could not connect to the server due to a technical issue on our end. Please try
        reconnecting again
      </p>
    </AppNotification>

    <AppNotification v-if="!isLoading && !jobs.length && !isError" type="info">
      <h4 class="font-bold">No jobs found</h4>
      <p class="font-semibold">We could not find any jobs</p>
    </AppNotification>

    <template v-if="!isLoading && jobs.length">
      <div class="grid gap-4 mt-8">
        <JobCard v-for="job in filteredJobs" :job="job" :key="job.id" />
      </div>
    </template>
  </main>
</template>
