import React, { useEffect } from 'react';


function Navbar(props) {
    console.log('this is props', props)
    let page;  
    if (props.currentPage === 'AboutMe') {
        page = 'AboutMe'
    } else if (props.currentPage === 'Projects') {
        page = 'Projects'
    } else if (props.currentPage === 'ContactForm') {
        page = 'ContactForm'
    }

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
                        <a data-testid="projects" href="#projects" className={page === 'Projects' ? 'underline':'' } onClick={() => props.setCurrentPage('Projects')}>
                            Projects
                        </a>
                    </li>
                    <li>
                        <a data-testid="contact" href="#contact" className={page === 'ContactForm' ? 'underline':''} onClick={() => props.setCurrentPage('ContactForm')}>
                            Contact
                        </a>
                    </li>
                    <li>
                        <a data-testid="resume" id="resume" href="">
                            Resume
                        </a>
                    </li>
                </ul>
            </nav>
          
        </header>
    )
}

export default Navbar
