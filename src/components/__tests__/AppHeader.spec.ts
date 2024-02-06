import { describe, it, expect, vi } from 'vitest'
import { shallowMount } from '@vue/test-utils'
import AppHeader from '@/components/common/AppHeader.vue'

// // Mock useRouter directly
// vi.mock('vue-router', () => {
//   const currentRoute = { path: '/' };
//   const useRouter = vi.fn(() => ({ currentRoute }));
//   return { useRouter };
// });

describe('AppHeader', () => {
  it('renders properly', () => {
    const wrapper = shallowMount(AppHeader, {
      global: {
        mocks: {
          $router: {
            currentRoute: { path: '/' },
            push: vi.fn()
          }
        }
      }
    })
    expect(wrapper.text()).toContain('Mini Yell')
  })

  it.skip('should not show the logout button if we are not in home path', () => {
    const wrapper = shallowMount(AppHeader)
    expect(wrapper.find('button').exists()).toBe(false)
  })

  it.skip('should show the logout button', () => {
    vi.mock('vue-router', () => ({
      useRouter: vi.fn(() => ({ currentRoute: { path: '/jobs' } }))
    }))

    const wrapper = shallowMount(AppHeader)
    expect(wrapper.find('button').exists()).toBe(true)
  })
})
