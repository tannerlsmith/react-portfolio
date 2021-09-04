import React, { useEffect } from 'react';


function Navbar() {
    // return(JSX)
    return (
        <header className="flex-row px-1 navbar">
            <h2>
                Tanner Smith
            </h2>
            <nav>
                <ul>
                    <li>
                        <a data-testid="about" href="">
                            About me
                        </a>
                    </li>
                    <li>
                        <a data-testid="projects" href="">
                            Projects
                        </a>
                    </li>
                    <li>
                        <a data-testid="contact" href="">
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
