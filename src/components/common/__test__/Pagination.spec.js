import React from 'react'
import { shallow } from 'enzyme'
import Pagination from '../Pagination'

const setUp = () => {
  const props = {
    ordersPerPage: 5,
    totalOrders: 20,
    paginate: jest.fn(),
    currentPage: 1
  }

  return shallow(<Pagination {...props} />)
}

describe('Pagination Component', () => {
  it('should render without crashing', () => {
    const wrapper = setUp()

    expect(wrapper).toMatchSnapshot()
    expect(wrapper.find('nav')).toHaveLength(1)
    expect(wrapper.find('ul')).toHaveLength(1)
    expect(wrapper.find('li')).toHaveLength(4)
  })
})
