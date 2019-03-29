import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Content from './Content';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <header className="App-header">
            <h1>Portfolio Explorer</h1>
          </header>
          <main>
            <Route path="/" component={Content} />
          </main>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
