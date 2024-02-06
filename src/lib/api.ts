import axios, { type AxiosResponse } from 'axios'
import type { Business } from '@/types/business'
import type { Job } from '@/types/jobs'

type APIResponse<T> = [null, T[]] | [Error]

const endpoint =
  import.meta.env.VITE_ENVIRONMENT === 'production'
    ? import.meta.env.VITE_PRODUCTION_API_ENDPOINT
    : import.meta.env.VITE_LOCAL_API_ENDPOINT

export const api = axios.create({
  baseURL: endpoint
})

export async function fetchData<T>(
  endpoint: string,
  params?: Record<string, any>
): Promise<APIResponse<T>> {
  try {
    const response: AxiosResponse<T[]> = await api.get<T[]>(endpoint, { params })
    return [null, response.data]
  } catch (error) {
    console.error(`Error fetching data from ${endpoint}`, error)
    return [error as Error]
  }
}

export async function getBusinesses(): Promise<APIResponse<Business>> {
  return fetchData<Business>('/businesses')
}

export async function getJobs(businessId: number): Promise<APIResponse<Job>> {
  return fetchData<Job>(`/business/${businessId}/jobs`)
}
