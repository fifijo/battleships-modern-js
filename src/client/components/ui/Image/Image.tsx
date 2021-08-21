import { styled } from '@linaria/react'
import type { FunctionComponent, PropsWithChildren } from 'react'
import React from 'react'

interface Props {
  readonly children: string
}

const IMAGE = styled.button`
  text-transform: uppercase;
`

const image: FunctionComponent<Props> = ({
  children
}: PropsWithChildren<Props>) => <IMAGE>{children}</IMAGE>

image.displayName = 'Image'

export default image
