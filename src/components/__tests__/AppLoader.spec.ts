import { describe, it, expect, vi } from 'vitest'
import { shallowMount } from '@vue/test-utils'
import AppLoader from '@/components/JobsView/AppLoader.vue'

describe('AppLoader', () => {
  it('renders properly', () => {
    const wrapper = shallowMount(AppLoader)
    expect(wrapper.find("[data-cy='loader-card']").exists()).toBe(true)
  })
})
