import { createGlobalStyle } from 'styled-components'
import fonts from '@/styles/fonts'
import { breakpoints, maxWidth } from '@/styles/breakpoints'

export const GlobalStyles = createGlobalStyle`

    *,
    *::before,
    *::after {
      box-sizing: border-box;
    }

    * {
      margin: 0;
    }

    html {
      font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont,
        'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif,
        'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
      font-size: 10px;
    }

    html,
    body {
      height: 100%;
    }

    body {
        font-size: 1.6rem;
        line-height: 2.8rem;
        font-weight: 400;
        font-family: ${fonts.roboto};
        -webkit-font-smoothing: antialiased;
    }

    img,
    picture,
    video,
    canvas,
    svg {
      display: block;
      max-width: 100%;
    }

    input,
    button,
    textarea,
    select {
      font: inherit;
    }

    p,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      overflow-wrap: break-word;
    }

    #root {
      isolation: isolate;
      height: 100%;
    }

    h1 {
        font-size: 3.6rem;
        line-height: 4.2rem;
        font-weight: 700;
        font-family: ${fonts.roboto};
    }

    h2 {
        font-size: 2.7rem;
        line-height: 3.2rem;
        font-weight: 500;
        margin: 0;
        font-family: ${fonts.roboto};
    }

    h3 {
        font-size: 2.2rem;
        line-height: 2.8rem;
        font-weight: 500;
        margin: 0;
        font-family: ${fonts.roboto};
    
        ${maxWidth(breakpoints.lg)} {
          font-size: 1.8rem;
          line-height: 2.4rem;
        }
    }
    
    h4 {
        font-size: 1.8rem;
        line-height: 2.1rem;
        font-weight: 500;
        margin: 0;
        font-family: ${fonts.roboto};
    }
  

    a {
        font-family: ${fonts.roboto};
        font-weight: 500;
        text-decoration: none;
        display: inline-block;
        transition: all 0.2s ease-out;
    }
`
