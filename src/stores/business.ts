import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { Business } from '@/types/business'
import type { Job } from '@/types/jobs'
import { getBusinesses, getJobs } from '@/lib/api'

export const useBusinessStore = defineStore('business', () => {
  const businesses = ref<Business[] | []>([])
  const jobs = ref<Job[] | []>([])
  const isLoading = ref(false)
  const isError = ref(false)

  async function getBusinessesAction() {
    isLoading.value = true
    const [error, data] = await getBusinesses()
    if (error) {
      isLoading.value = false
      isError.value = true
      return
    }
    businesses.value = data.businesses
    isLoading.value = false
  }

  async function getJobsAction(businessID: number) {
    isLoading.value = true
    jobs.value = []
    const [error, data] = await getJobs(businessID)
    if (error) {
      isLoading.value = false
      isError.value = true
      return
    }
    jobs.value = data
    isLoading.value = false
  }

  return { isLoading, isError, businesses, jobs, getBusinessesAction, getJobsAction }
})
