import {
  space,
  color,
  layout,
  typography,
  compose,
  flexbox,
  grid,
  background,
  border,
  position,
  shadow,
  system,
} from 'styled-system'

const allBasicSystems = compose(
  space,
  color,
  layout,
  typography,
  flexbox,
  grid,
  background,
  border,
  position,
  shadow
)

const backgroundImage = system({
  backgroundImage: {
    property: 'backgroundImage',
    scale: 'colors',
  },
})

const cursor = system({
  cursor: {
    property: 'cursor',
    scale: 'cursor',
  },
})

const userSelect = system({
  userSelect: {
    property: 'userSelect',
    scale: 'userSelect',
  },
})

const whiteSpace = system({
  whiteSpace: {
    property: 'whiteSpace',
  },
})

const notForwardProps = [
  'display',
  'color',
  'backgroundImage',
  'bg',
  'width',
  'height',
  'position',
  'border',
  'textDecoration',
  'fontSize',
  'fontWeight',
  'cursor',
  'userSelect',
]

const shouldForwardPropFn = (prop) => !notForwardProps.includes(prop)

const shouldForwardPropConfig = {
  shouldForwardProp: (prop, defaultValidatorFn) =>
    shouldForwardPropFn(prop) && defaultValidatorFn(prop),
}

export {
  allBasicSystems,
  backgroundImage,
  cursor,
  userSelect,
  whiteSpace,
  shouldForwardPropFn,
  shouldForwardPropConfig,
}
