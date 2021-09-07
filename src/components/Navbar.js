import React, { useEffect } from 'react';


function Navbar(props) {
    console.log('this is props', props)
    let page;  
    if (props.currentPage === 'AboutMe') {
        page = 'AboutMe'
    } 
    // else if statements

    return (
        <header className="flex-row px-1 navbar header">
            <h2 class="page-name">
                Tanner Smith
            </h2>
            <nav>
                <ul>
                    <li>
                        <a data-testid="about" href="#about" className={page === 'AboutMe' ? 'underline':'' } onClick={() => props.setCurrentPage('AboutMe')}>
                            About me
                        </a>
                    </li>
                    <li>
                        <a data-testid="projects" href="#projects" onClick={() => props.setCurrentPage('Projects')}>
                            Projects
                        </a>
                    </li>
                    <li>
                        <a data-testid="contact" href="#contact" onClick={() => props.setCurrentPage('ContactForm')}>
                            Contact
                        </a>
                    </li>
                    <li>
                        <a data-testid="resume" href="">
                            Resume
                        </a>
                    </li>
                </ul>
            </nav>
          
        </header>
    )
}

export default Navbar
