import React from 'react'
import { mount } from 'enzyme'
import Loader from '../Loader'

describe('Loader Component', () => {
  it('Should render without crashing', () => {
    const wrapper = mount(<Loader />)
    expect(wrapper).toMatchSnapshot()
  })
})
