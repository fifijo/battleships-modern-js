import * as React from 'react'
import * as renderer from 'react-test-renderer'
import Image from './Image'

it('Image renders correctly', () => {
  const tree = renderer.create(<Image>Image</Image>).toJSON()
  expect(tree).toMatchSnapshot()
})
