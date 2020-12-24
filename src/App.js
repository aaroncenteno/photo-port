// import './App.css';
import React from 'react';
import About from './components/About';
import Nav from './components/Nav';

function App() {
  return (
    <div>
      <header>
        <Nav></Nav>
      </header>
      <main>
        <About></About>
      </main>
    </div>
  );
}

export default App;
