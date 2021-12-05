import React, { forwardRef } from 'react'
import styled from 'styled-components'
import {
  border,
  compose,
  color,
  background,
  space,
  typography,
  layout,
  position,
  flexbox,
} from 'styled-system'

import { shouldForwardPropConfig, userSelect, cursor, whiteSpace } from 'styled'

const BasicText = styled.span.withConfig(shouldForwardPropConfig)`
  ${compose(
    border,
    color,
    background,
    space,
    typography,
    layout,
    position,
    flexbox,
    userSelect,
    cursor,
    whiteSpace
  )}
`

export { BasicText }

const Text = (props, ref) => {
  return <BasicText ref={ref} {...props} />
}

export default forwardRef(Text)
