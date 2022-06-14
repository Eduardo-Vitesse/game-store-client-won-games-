import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: none;
    }

    html: {
        font-size: 62.5%;
    }

    html, body, #__next {
        height: 100%;
    }

    body: {
        font-family: -apple-system
    }
`

export default GlobalStyle
