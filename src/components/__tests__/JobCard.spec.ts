import { describe, it, expect } from 'vitest'
import { shallowMount } from '@vue/test-utils'
import JobCard from '@/components/JobsView/JobCard.vue'

describe('JobCard', () => {
  it('renders properly', () => {
    const wrapper = shallowMount(JobCard, {
      props: {
        job: {
          id: 2,
          classification: { id: 1, name: 'Plumbers' },
          location: { id: 1, name: 'Brooklyn, NYC' },
          headline: 'Leaky tap needs fixing',
          description: 'The tap in my kitchen is dripping all of the time, please fix it.',
          date_added: '2023-11-05T15:48:13.984Z'
        }
      }
    })
    expect(wrapper.find("[data-cy='date']").exists()).toBe(true)
    expect(wrapper.find("[data-cy='date']").text()).toBe('Date Posted: 05/11/2023')
  })
})
