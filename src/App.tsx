import React from "react";
import styled from "styled-components";
import Header from "components/Header";
import GistList from "components/GistList";
import GlobalStyles from "./GlobalStyle";

const App: React.FC = () => (
  <Wrapper className="App" data-testid="app">
    <Header />
    <GlobalStyles />
    <GistList />
  </Wrapper>
);

const Wrapper = styled.div`
  font-size: 14px;
  line-height: 1.5;
`;

export default App;
