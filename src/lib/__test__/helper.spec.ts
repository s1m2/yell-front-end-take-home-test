import { describe, it, expect } from 'vitest'
import { formatDate } from '../helper'

describe('formatDate', () => {
  it('should format the date correctly', () => {
    const date = '2023-11-03T12:58:13.984Z'
    const formattedDate = formatDate(date)
    expect(formattedDate).toBe('03/11/2023')
  })
})
