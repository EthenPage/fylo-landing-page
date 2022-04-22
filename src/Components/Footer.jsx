import React from "react";
import { ReactComponent as Logo } from "../Assets/images/logo.svg";
import { ReactComponent as Phone } from "../Assets/images/icon-phone.svg";
import { ReactComponent as Email } from "../Assets/images/icon-email.svg";

// social

const Footer = () => {
  return (
    <React.Fragment>
      <footer className="footer">
        <div className="wrapper">
          <Logo />
          <div className="footer__sec">
              <address>
                <a href="tel:+1-543-123-4567">
                  <Phone />
                  Phone: +1-543-123-4567
                </a>
                <a href="mailto:example@fylo.com">
                  <Email />
                  example@fylo.com
                </a>
              </address>
              <div className="links">
                
                  <div className="left">
                  <ul>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Jobs</a></li>
                    <li><a href="#">Press</a></li>
                    <li><a href="#">Blog</a></li>
                    </ul>
                  </div>
                  <div className="right">
                    <ul>
                    <li><a href="#">Contact Us</a></li>
                    <li><a href="#">Terms</a></li>
                    <li><a href="#">Privacy</a></li>
                    </ul>
                  </div>
                
              </div>
              <div className="social">
                <a href="#" class="fa-brands fa-facebook-f" aria-label="Facebook"> </a>
                <a href="#" class="fa-brands fa-twitter" aria-label="Twitter"> </a>
                <a href="#" class="fa-brands fa-instagram" aria-label="Instagram"> </a>
              </div>
          </div>

          <p class="attribution">
            Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
            Coded by <a href="https://www.frontendmentor.io/profile/EthenPage">Mirza Monirul Alam</a>.
          </p>
        </div>
      </footer>
    </React.Fragment>
  );
};

export default Footer;
