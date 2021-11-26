import React, { forwardRef } from 'react'

import { BasicButton } from './styled'

const Button = ({ disabled, children, loading, loadingIcon, onClick, ...restProps }, ref) => {
  return (
    <BasicButton disabled={disabled} ref={ref} onClick={onClick} {...restProps}>
      {loading && loadingIcon}
      {children}
    </BasicButton>
  )
}

export default forwardRef(Button)
