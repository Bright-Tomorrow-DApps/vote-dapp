import styled from 'styled-components'
import { compose } from 'styled-system'

import {
  allBasicSystems,
  backgroundImage,
  cursor,
  userSelect,
  shouldForwardPropConfig,
} from 'styled'

const BasicFlex = styled.div.withConfig(shouldForwardPropConfig)`
  ${compose(allBasicSystems, backgroundImage, cursor, userSelect)}
  display: ${({ display }) => (display ? display : 'flex')};
`

export { BasicFlex }
