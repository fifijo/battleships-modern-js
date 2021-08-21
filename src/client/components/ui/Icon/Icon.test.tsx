import * as React from 'react'
import * as renderer from 'react-test-renderer'
import Icon from './Icon'

it('Icon renders correctly', () => {
  const tree = renderer.create(<Icon>Icon</Icon>).toJSON()
  expect(tree).toMatchSnapshot()
})
