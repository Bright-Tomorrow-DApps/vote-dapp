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

export { BasicBox }
