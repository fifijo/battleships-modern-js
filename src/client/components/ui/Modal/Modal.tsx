import React from 'react'
import { styled } from '@linaria/react'
import type { FunctionComponent, PropsWithChildren } from 'react'

interface Props {
  readonly children: string
}

const MODAL = styled.button`
  text-transform: uppercase;
`
const modal: FunctionComponent<Props> = ({
  children
}: PropsWithChildren<Props>) => <MODAL>{children}</MODAL>

modal.displayName = 'Modal'

export default modal
