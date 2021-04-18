/* eslint-disable no-undef */

import toJson from 'enzyme-to-json'
import Index from '../index'

describe('Render Dom', () => {
  it('renders without crashing', () => {
    expect(
      toJson({ ...Index, _reactInternalInstance: 'censored' })
    ).toMatchSnapshot()
  })
})
