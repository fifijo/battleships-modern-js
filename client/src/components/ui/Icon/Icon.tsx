import { styled } from '@linaria/react'
import type { FunctionComponent, PropsWithChildren } from 'react'
import React, { Fragment } from 'react'

interface Props {
  readonly children: string
}

const ICON = styled.button`
  text-transform: uppercase;
`

const icon: FunctionComponent<Props> = ({
  children
}: PropsWithChildren<Props>) => (
  <Fragment>
    <ICON>{children}</ICON>
  </Fragment>
)

icon.displayName = 'Icon'

export default icon
