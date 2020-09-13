import ApiRoutes from '@/shared/constants/api.routes'

describe('ApiRoutes', () => {
  it('should create', () => {
    expect(ApiRoutes).toBeTruthy()
  })

  it('should have getGroceryListURL method', () => {
    expect(ApiRoutes.getGroceryListURL).toBeDefined()
  })

  it('should return grocery list url when call getGroceryListURL method', () => {
    const expectedResponse = 'http://localhost:3000/grocery'
    const url = ApiRoutes.getGroceryListURL()

    expect(url).toBe(expectedResponse)
  })

  it('should have getFavouriteListURL method', () => {
    expect(ApiRoutes.getFavouriteListURL).toBeDefined()
  })

  it('should return favorites list url when call getFavouriteListURL method', () => {
    const expectedResponse = 'http://localhost:3000/grocery?favorite=1'
    const url = ApiRoutes.getFavouriteListURL()

    expect(url).toBe(expectedResponse)
  })
})
