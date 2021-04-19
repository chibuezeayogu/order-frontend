import React from 'react'
import { shallow } from 'enzyme'
import DateInput from '../DateInput'

const setUp = () => {
  const props = {
    value: '',
    onChange: jest.fn(),
    text: 'Booking Date'
  }

  return shallow(<DateInput {...props} />)
}

describe('DateInput Component', () => {
  it('should render without crashing', () => {
    const wrapper = setUp()
    const input = wrapper.find('input')

    expect(wrapper).toMatchSnapshot()
    expect(input).toHaveLength(1)
    expect(input.get(0).props.type).toBe('date')
    expect(input.get(0).props.required).toBeTruthy()
    expect(input.get(0).props.placeholder).toBe('Booking Date')
  })
})
