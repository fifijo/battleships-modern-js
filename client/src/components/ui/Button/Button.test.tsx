import * as React from 'react'
import * as renderer from 'react-test-renderer'
import Button from './Button'

it('Button renders correctly', () => {
  const tree = renderer.create(<Button>ACME</Button>).toJSON()
  expect(tree).toMatchSnapshot()
})
