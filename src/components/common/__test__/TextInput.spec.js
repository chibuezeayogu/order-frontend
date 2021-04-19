import React from 'react'
import { shallow } from 'enzyme'
import TextInput from '../TextInput'

const setUp = () => {
  const props = {
    value: '',
    onChange: jest.fn(),
    text: 'email'
  }

  return shallow(<TextInput {...props} />)
}

describe('TextInput Component', () => {
  it('should render without crashing', () => {
    const wrapper = setUp()
    const input = wrapper.find('input')

    expect(wrapper).toMatchSnapshot()
    expect(input).toHaveLength(1)
    expect(input.get(0).props.type).toBe('text')
    expect(input.get(0).props.required).toBeTruthy()
    expect(input.get(0).props.placeholder).toBe('email')
  })
})
