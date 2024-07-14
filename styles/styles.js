import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  
  html {
    height: 100%;
  }

  body {
    overflow-x: hidden;
    overflow-y: auto;
    height: 100%;
    margin: 0;
    padding: 0;
  }

  div#root {
    height: 100%;
  }

  .container {
    font-family: Arial, sans-serif;
    padding: 20px;
  }

  .nutritional-info-display {
    margin-bottom: 20px;
  }
`;

export const HeaderLabel = styled.h1`
  display: flex;
  justify-content: center;
`

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Loader = styled.div`
  border-width: 0.3rem;
  border-style: dashed;
  
  width: 3.2rem;
  height: 3.2rem;
  border-radius: 50%;
  position: relative;
  -webkit-animation: spin 2s infinite;
  animation: spin 2s infinite;

  &:before {
    top: 0.063rem;
  }

  &:after {
    bottom: 0.063rem;
  }

  @keyframes spin {
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const Root = styled.main`
  display: flex;
  flex-flow: column;
  align-items: center;
  text-align: center;
  overflow-x: hidden;
  overflow-y: auto;
  padding: 50px 0 100px;
`;

export const Preview = styled.img`
  width: 100%;
  height: auto;
`;

export const Footer = styled.footer`
  position: fixed;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  background: silver;

  button {
    margin: 0 10px;
  }
`;
