import React, { forwardRef } from 'react'

import { BasicBox } from './styled'

const Box = ({ display = 'block', ...restProps }, ref) => {
  return <BasicBox ref={ref} display={display} {...restProps} />
}

export default forwardRef(Box)
