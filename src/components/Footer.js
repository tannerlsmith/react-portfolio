import React from "react";
import reactDOM from 'react-dom';
import { SocialIcon } from 'react-social-icons';


function Footer() {
  return (
    <div class="d-flex flex-column bootstrap-footer">
        <footer class="footer">
          <div class="footer-icons">
            <a href="https://coreui.io">
              <SocialIcon url="https://www.linkedin.com/in/123tannerlsmith/" />
              <SocialIcon url="https://github.com/tannerlsmith" />
            </a>
          </div>
          
        </footer>
      </div>
    )
}

export default Footer;