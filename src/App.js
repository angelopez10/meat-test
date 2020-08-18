import React from "react";
import injectContext from "./AppContext";
import { createGlobalStyle } from "styled-components";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Form from "./components/form/Form";


const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: #F9F9F9;
  }
`;

function App() {
  return (
    <div>
      <GlobalStyle />
      <Header />
      <Main />
      <Form />
    </div>
  );
}

export default injectContext(App);
