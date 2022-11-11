import { createGlobalStyle, ThemeProps, css } from 'styled-components'
import { fontSizes, gapSizes, screenSizes, Theme } from './theme'
import { rgba } from 'polished'

export const LinkStyle = css`
  color: ${(props) => props.theme.accent};
  cursor: pointer;
`

export const GlobalStyle = createGlobalStyle`
  :root{
    transition: margin 300ms ease-in-out;
    --pageMargin: 80px;
    @media (max-width: ${screenSizes.L}px) {
      --pageMargin: 40px;
    }
    @media (max-width: ${screenSizes.M}px) {
      --pageMargin: 20px;
    }
  }
  h1,h2,h3,h4{
    margin: 0;
  }
  h1 {
    font-size: ${fontSizes.XXL};
  }
  h2 {
    font-size: ${fontSizes.XL};
  }
  h3 {
    font-size: ${fontSizes.L};
  }
  h4 {
    font-size: ${fontSizes.M};
  }
  html {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: ${(props) => props.theme.black};
  }
  html,
  body {
    font-size: 16px;
    height: 100%;
    scroll-behavior: smooth;
    width: 100%;
  }
  body {
    min-height: 100%;
    margin: 0;
    padding: 0;
    background-color: ${(props: ThemeProps<Theme>) => props.theme.black};
  }
  *::-webkit-scrollbar {
    width: 12px;
    background-color: ${(props: ThemeProps<Theme>) => props.theme.black};
    border-radius: 4px;
  }
  *::-webkit-scrollbar-thumb {
    border: 2px solid transparent;
    background-color:${(props: ThemeProps<Theme>) => props.theme.primary};;
    border-radius: 20px;
    background-clip: content-box;
  }
  #root{
    display: flex;
    flex-flow: column;
    min-height: 100vh;
    max-width: 100%;
    display: flex;
    align-items: center;
  }
  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }
  a {
    text-decoration: none;
    color: ${(props: ThemeProps<Theme>) => props.theme.white};
  }
  label {
    font-size: ${fontSizes.XS}
    position: relative;
    color: ${(props) => props.theme.label};
  }
  input:disabled ~ label{
   color: red;
  }
  input[type="checkbox"] {
  -webkit-appearance: radio;
  -moz-appearance: radio;
  -ms-appearance: radio; 
  }
  
  button {
    font-size: 16px;
    margin: 0;
    padding: 8px 12px;
  }
  hr {
    background-color: ${(props) => rgba(props.theme.white, 0.2)};
    border: 0;
  }
  a {
    ${LinkStyle};
  }
  a.disabled {
    pointer-events: none;
  }
  svg{
    overflow: visible;
    + span {
      margin-left: ${gapSizes.S};
    }
  }

  /* Firefox */
  input[type=number] {
    -moz-appearance: textfield;
  }
  .closingModal {
    display: flex !important;
    pointer-events: none;
    inset: 0;
    animation: fade-out 300ms forwards;
  }
  @keyframes fade-out {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }

  p {
    margin: 0;
  }
  * {
  box-sizing: border-box;
  &::before, &::after {
    box-sizing: border-box;
  }
}
`
