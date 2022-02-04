import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    &::-webkit-scrollbar {
    width: 8px;
    background: ${ props => props.theme.colors.gray[10] };
    }
    &::-webkit-scrollbar-thumb {
      border-radius: 8px;
      background:  ${ props => props.theme.colors.gray[50] };
    }
  }

  * {
    font-family: 'Poppins', sans-serif;
    box-sizing: border-box;
  }
  button {
    border: none;
  }

  .categoryActive {
    background: ${ props => props.theme.colors.secondary[1] }!important;
  }

  ul {
    padding: 0;
    list-style: none;
    margin: 0;
  }

  a {
    color: inherit;
    text-decoration: none;
    display: block;
  }

  input {
    border: none;
    outline: none;
  }
  
  #root {
    .swiper-button-prev {
      left: 0px;
    }
    .swiper-button-next, .swiper-button-prev {
      color: ${ props => props.theme.colors.secondary[1]};
      &:after {
        font-size: 30px;
        font-weight: 700;
      }
    }
  }
`