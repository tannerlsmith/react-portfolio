import React, { useState } from 'react';
import Navbar from './components/Navbar.js';
import About from './components/About.js';
import Projects from './components/Projects.js';
import Footer from './components/Footer.js';
import ContactForm from './components/Contact.js'
import 'bootstrap/dist/css/bootstrap.css';
import '../src/App.css';

function App() {
const [currentPage, setCurrentPage] = useState('AboutMe'); 

  function pageChanger(page) {
    if (page === 'AboutMe') {
      return <About /> 
    } else if (page === 'Projects') {
      return <Projects />
    } else if (page === 'ContactForm') {
      return <ContactForm /> 
    }
  }

  console.log(currentPage)


  return (
    <div class="app-div">
        <Navbar setCurrentPage={setCurrentPage} currentPage={currentPage} />



        <main>
          {pageChanger(currentPage)}
          
        </main> 

      <div class="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;