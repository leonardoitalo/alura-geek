import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  #root {
    min-height: 100vh;
    font-family: "Raleway", sans-serif;
    --global-padding: 0 152px;

    @media (max-width: 1100px) {
      --global-padding: 0 32px
    }

    @media (max-width: 768px) {
      --global-padding: 0 16px
    }
  }
`

export default GlobalStyles
