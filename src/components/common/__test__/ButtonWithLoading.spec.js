import React from 'react'
import { shallow } from 'enzyme'
import ButtonWithLoading from '../ButtonWithLoading'

const setUp = loading => {
  const props = {
    text: 'testing',
    loading
  }

  return shallow(<ButtonWithLoading {...props} />)
}

describe('Loader Component', () => {
  let wrapper
  beforeEach(() => {
    wrapper = setUp(false)
  })

  it('Should render without crashing', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('Should render button with text testing', () => {
    expect(wrapper.find('button').text()).toBe('testing')
  })

  it('Should render button with text loading...', () => {
    wrapper.setProps({ loading: true })

    expect(wrapper.find('button').text()).toBe('Loading...')
  })
})
