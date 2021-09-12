import * as React from 'react'
import * as renderer from 'react-test-renderer'
import Close from './Close'

it('Close renders correctly', () => {
  const tree = renderer.create(<Close>Close</Close>).toJSON()
  expect(tree).toMatchSnapshot()
})
