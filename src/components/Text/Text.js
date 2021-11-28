import React, { forwardRef } from 'react'

import { BasicText } from './styled'

const Text = (props, ref) => {
  return <BasicText ref={ref} {...props} />
}

export default forwardRef(Text)
