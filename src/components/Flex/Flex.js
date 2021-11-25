import React, { forwardRef } from 'react'

import { BasicFlex } from './styled'

const Flex = ({ display = 'flex', ...restProps }, ref) => {
  return <BasicFlex ref={ref} display={display} {...restProps} />
}

export default forwardRef(Flex)
