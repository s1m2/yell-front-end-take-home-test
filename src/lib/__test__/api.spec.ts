import { describe, it, expect, vi } from 'vitest'
import { fetchData, api } from '@/lib/api'

describe('fetchData', () => {
  it('should fetch data successfully', async () => {
    // Mock the axios response
    const responseData = [{ id: 1, name: 'John' }]
    const mockResponse = { data: responseData }
    vi.spyOn(api, 'get').mockResolvedValue(mockResponse)

    // Call the fetchData function
    const endpoint = '/users'
    const params = { page: 1 }
    const result = await fetchData(endpoint, params)

    // Assert the result
    expect(result).toEqual([null, responseData])
    expect(api.get).toHaveBeenCalledWith(endpoint, { params })
  })

  it('should handle error when fetching data', async () => {
    // Mock the axios error
    const error = new Error('Network Error')
    vi.spyOn(api, 'get').mockRejectedValue(error)

    // Call the fetchData function
    const endpoint = '/users'
    const result = await fetchData(endpoint)

    // Assert the result
    expect(result).toEqual([error])
    expect(console.error).toHaveBeenCalledWith(`Error fetching data from ${endpoint}`, error)
  })
})
