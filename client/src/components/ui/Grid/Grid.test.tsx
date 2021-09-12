import * as React from 'react'
import * as renderer from 'react-test-renderer'
import Grid from './Grid'

it('Grid renders correctly', () => {
  const tree = renderer.create(<Grid>Grid</Grid>).toJSON()
  expect(tree).toMatchSnapshot()
})
