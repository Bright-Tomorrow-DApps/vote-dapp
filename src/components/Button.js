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
  variant,
} from 'styled-system'

const BasicButton = styled.button`
  ${compose(color, space, typography, layout, background, border, position, shadow)}

  margin: 5px;
  font-size: 16px;
  padding: 6px 12px;
  border: 2px solid pink;
  border-radius: 3px;
  cursor: pointer;
  background: gray;
  color: blue;
`

const Button = ({ children, onClick, ...restProps }) => {
  return (
    <BasicButton onClick={onClick} {...restProps}>
      {children}
    </BasicButton>
  )
}

export default Button
