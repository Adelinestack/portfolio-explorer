import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: #000;
    margin:0;
    padding:20px;
    color:#d8d8d8;
  }`;

export const AppContainer = styled.div`
  font-family: 'Montserrat', sans-serif;
  b
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-around;
  & h1 {
    text-align: center;
    font-weight: 100;
  }
`;

export const Main = styled.main``;
