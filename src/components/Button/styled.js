import styled from 'styled-components'
import {
  compose,
  color,
  space,
  typography,
  layout,
  background,
  border,
  position,
  shadow,
} from 'styled-system'

import { shouldForwardPropConfig, cursor } from 'styled'

const BasicButton = styled.button.withConfig(shouldForwardPropConfig)`
  ${compose(color, space, typography, layout, background, border, position, shadow, cursor)}

  cursor: pointer;

  &:disabled {
    cursor: not-allowed;
  }
`

export { BasicButton }
