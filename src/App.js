import React from 'react';
import Navbar from './components/Navbar.js';
import About from './components/About.js';
import Projects from './components/Projects.js';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.css';
import '../src/App.css';


function App() {
  
  return (
    <div class="app-div">
        <Navbar />
      <main>
        <About />
      </main>

      <div class="projects"> 
        <Projects />
      </div>

      <div class="footer">
        <Footer />
      </div>
    </div>

    
  );
}

export default App;
