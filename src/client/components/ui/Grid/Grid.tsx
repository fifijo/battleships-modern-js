import React from 'react'
import { styled } from '@linaria/react'
import type { FunctionComponent, PropsWithChildren } from 'react'

interface Props {
  readonly children: string
}

const GRID = styled.button`
  text-transform: uppercase;
`
const grid: FunctionComponent<Props> = ({
  children
}: PropsWithChildren<Props>) => <GRID>{children}</GRID>

grid.displayName = 'Grid'

export default grid
