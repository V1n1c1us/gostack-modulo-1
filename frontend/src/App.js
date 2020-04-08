import React from 'react';

import Header from './components/Header';

function App() {
  return (
    <>
      <Header title="Header Title">
        <ul>
          <li>Meni 1</li>
          <li>Menu 2</li>
        </ul>
      </Header>
      <Header title="Header Title">
        <ul>
          <li>Meni 1</li>
          <li>Menu 2</li>
          <li>Menu 2</li>
          <li>Menu 2</li>
          <li>Menu 2</li>
        </ul>
      </Header>
    </>
  );
}

export default App;