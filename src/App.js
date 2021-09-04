import React from 'react';
import Navbar from './components/Navbar.js';
import About from './components/About.js';
import Projects from './components/Projects.js';
import 'bootstrap/dist/css/bootstrap.css';
import '../src/App.css';


function App() {
  
  return (
    <div>
        <Navbar />
      <main>
        <About />
      </main>

      <div class="projects"> 
        <Projects />
      </div>
    </div>
    
  );
}

export default App;
