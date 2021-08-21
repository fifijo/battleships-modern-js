import * as React from 'react'
import * as renderer from 'react-test-renderer'
import Loader from './Loader'

it('Loader renders correctly', () => {
  const tree = renderer.create(<Loader>Loader</Loader>).toJSON()
  expect(tree).toMatchSnapshot()
})
