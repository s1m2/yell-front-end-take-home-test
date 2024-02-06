import { describe, it, expect, beforeEach, vi } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { useBusinessStore } from '@/stores/business'

vi.mock('@/lib/api', () => ({
  getBusinesses: vi.fn().mockResolvedValue({
    json: vi.fn().mockResolvedValueOnce({
      businesses: [
        {
          id: 1,
          username: 'mario.bros',
          display_name: 'Mario Bros.',
          classifications: [1],
          locations_served: [1]
        }
      ]
    })
  }),

  getJobs: vi.fn().mockResolvedValue({
    json: vi.fn().mockResolvedValueOnce([
      {
        id: 1,
        classification: {
          id: 1,
          name: 'Plumbers'
        },
        location: {
          id: 1,
          name: 'Brooklyn, NYC'
        },
        headline: "My toilet won't flush",
        description: 'There is a problem with my toilet and I need someone to fix it.',
        date_added: '2023-11-03T12:58:13.984Z'
      }
    ])
  })
}))

describe('useMarvelStore', () => {
  let store: ReturnType<typeof useBusinessStore>

  beforeEach(() => {
    setActivePinia(createPinia())
    store = useBusinessStore()
  })

  it('should fetch a list of businesses', async () => {
    await store.getBusinessesAction()

    expect(store.isLoading).toBe(false)
    expect(store.isError).toBe(false)
    expect(store.businesses).toEqual(mockCharacters)
  })

  it('should fetch a list of jobs for a business', async () => {
    await store.getJobsAction(2)

    expect(store.isLoading).toBe(false)
    expect(store.isError).toBe(false)
    expect(store.jobs).toEqual(mockCharacters)
  })
})
