import React from 'react'
import { styled } from '@linaria/react'
import type { FunctionComponent, PropsWithChildren } from 'react'

interface Props {
  readonly children: string
}

const CLOSE = styled.button`
  text-transform: uppercase;
`
const close: FunctionComponent<Props> = ({
  children
}: PropsWithChildren<Props>) => <CLOSE>{children}</CLOSE>

close.displayName = 'Close'

export default close
