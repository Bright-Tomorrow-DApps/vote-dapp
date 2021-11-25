import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'

const GlobalStyle = createGlobalStyle`
  ${normalize}

  html {
    box-sizing: border-box;
    height: 100%;
  }

  body {
    box-sizing: inherit;
    font-family: "Open Sans", "PingFang TC", "Helvetica Neue", Arial, "sans-serif", "微軟正黑體";
    font-weight: 400;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    height: 100%;
  }

  #root {
    height: 100%;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }
`

export default GlobalStyle
