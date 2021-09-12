import * as React from 'react'
import * as renderer from 'react-test-renderer'
import Modal from './Modal'

it('Modal renders correctly', () => {
  const tree = renderer.create(<Modal>Modal</Modal>).toJSON()
  expect(tree).toMatchSnapshot()
})
