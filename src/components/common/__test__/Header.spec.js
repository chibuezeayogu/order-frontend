import React from 'react'
import Header from '../Header'

const store = mockStore({})

const setUp = () => {
  const props = {
    history: {
      push: jest.fn()
    }
  }
  return <Header {...props} />
}

describe('Header Component', () => {
  let wrapper
  beforeAll(() => {
    wrapper = mockComponentWithProvider(store, setUp())
  })

  afterAll(() => {
    jest.restoreAllMocks()
  })

  it('should render without crashing', () => {
    expect(wrapper.find('header')).toHaveLength(1)
    wrapper.find('button').simulate('click')
  })
})
