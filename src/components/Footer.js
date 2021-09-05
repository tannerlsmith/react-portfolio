import React from "react";
import reactDOM from 'react-dom';
import { SocialIcon } from 'react-social-icons';


function Footer() {
  return (
    <div class="d-flex flex-column bootstrap-footer">
        <footer class="footer">
          <div>
            <a href="https://coreui.io">
              <SocialIcon url="https://www.linkedin.com/in/123tannerlsmith/" id="linkedin-icon" />
              <SocialIcon url="https://github.com/tannerlsmith" id="linkedin-icon"/>
            </a>
          </div>
          
        </footer>
      </div>
    )
}

export default Footer;