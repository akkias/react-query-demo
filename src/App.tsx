import React from 'react';
import logo from './logo.svg';
import './App.css';
import Menus from './components/menus';
import Routing from './routing';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Menus />
      <>
          <Routing />
      </>
      </BrowserRouter>
    </div>
  );
}

export default App;
