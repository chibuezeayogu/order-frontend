import React from 'react'
import { shallow } from 'enzyme'
import PasswordInput from '../PasswordInput'

const setUp = () => {
  const props = {
    value: '',
    onChange: jest.fn(),
    text: 'password'
  }

  return shallow(<PasswordInput {...props} />)
}

describe('PasswordInput Component', () => {
  it('should render without crashing', () => {
    const wrapper = setUp()
    const input = wrapper.find('input')

    expect(wrapper).toMatchSnapshot()
    expect(input).toHaveLength(1)
    expect(input.get(0).props.type).toBe('password')
    expect(input.get(0).props.required).toBeTruthy()
    expect(input.get(0).props.placeholder).toBe('Password')
  })
})
