import React from 'react'
import { styled } from '@linaria/react'
import type { FunctionComponent, PropsWithChildren } from 'react'

interface Props {
  readonly children: string
}

const BUTTON = styled.button`
  text-transform: uppercase;
`

const button: FunctionComponent<Props> = ({
  children
}: PropsWithChildren<Props>) => <BUTTON>{children}</BUTTON>

button.displayName = 'Button'

export default button
