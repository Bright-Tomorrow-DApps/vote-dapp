import React, { forwardRef } from 'react'
import styled from 'styled-components'
import { compose, system } from 'styled-system'
import {
  allBasicSystems,
  backgroundImage,
  cursor,
  userSelect,
  shouldForwardPropConfig,
} from 'styled'

const BasicBox = styled.div.withConfig(shouldForwardPropConfig)`
  ${compose(
    allBasicSystems,
    backgroundImage,
    cursor,
    userSelect,
    system({
      textDecoration: true,
    })
  )}
`
const Box = ({ display = 'block', ...restProps }, ref) => {
  return <BasicBox ref={ref} display={display} {...restProps} />
}

export default forwardRef(Box)
