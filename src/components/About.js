import React from 'react';
import Headshot from '../../src/images/profile-pic.png'

function About() {
    return (
        <section class="about-section">
            <h1 id="about">About me</h1>
            <p>
                I'm a full-stack web developer who works with JavaScript, react, node, HTML and CSS, MySql, and more. This is my first React App.            </p>
            <img class="about-me-image" src={Headshot}></img>
        </section>

        
    );
    
}

export default About;