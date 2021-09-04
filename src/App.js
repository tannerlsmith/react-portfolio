import React from 'react';
import Navbar from './components/Navbar.js';
import About from './components/About.js';
import '../src/App.css';

function App() {
  
  return (
    <div>
        <Navbar />
      <main>
        <About />
      </main>
    </div>
  );
}

export default App;
