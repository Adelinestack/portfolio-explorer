import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Content from './Content';

import { GlobalStyle, AppContainer, Header, Main } from '../stylized/appStyle';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <AppContainer className="App">
          <GlobalStyle />
          <Header>
            <h1>Portfolio Explorer</h1>
          </Header>
          <Main>
            <Route path="/" component={Content} />
          </Main>
        </AppContainer>
      </BrowserRouter>
    );
  }
}

export default App;
