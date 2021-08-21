import { styled } from '@linaria/react'
import type { FunctionComponent, PropsWithChildren } from 'react'
import React from 'react'

interface Props {
  readonly children: string
}

const LOADER = styled.button`
  text-transform: uppercase;
`

const loader: FunctionComponent<Props> = ({
  children
}: PropsWithChildren<Props>) => <LOADER>{children}</LOADER>

loader.displayName = 'Loader'

export default loader
