import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import BusinessCard from '@/components/BusinessCard.vue'

describe('Business Card', () => {
  it('renders properly', () => {
    const wrapper = mount(BusinessCard, {
      props: {
        business: {
          id: 1,
          username: 'mario.bros',
          display_name: 'Mario Bros.',
          classifications: [1],
          locations_served: [1]
        }
      },
      global: {
        stubs: ['RouterLink']
      }
    })

    expect(wrapper.find("[data-cy='business-avatar']").text()).toBe('M')
    expect(wrapper.find("[data-cy='display_name']").text()).toBe('Mario Bros.')
    expect(wrapper.find("[data-cy='username']").text()).toBe('mario.bros')
  })
})
