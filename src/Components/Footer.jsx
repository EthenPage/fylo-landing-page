import React from "react";
import { ReactComponent as Logo } from "../Assets/images/logo.svg";
import { ReactComponent as Phone } from "../Assets/images/icon-phone.svg";
import { ReactComponent as Email } from "../Assets/images/icon-email.svg";

// social

const Footer = () => {
  return (
    <React.Fragment>
      <footer className="footer">
        <section className="wrapper">
          <Logo />
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
            <ul>
              <div className="left">
                <li><a href="#">About Us</a></li>
                <li><a href="#">Jobs</a></li>
                <li><a href="#">Press</a></li>
                <li><a href="#">Blog</a></li>
              </div>
              <div className="right">
                <li><a href="#">Contact Us</a></li>
                <li><a href="#">Terms</a></li>
                <li><a href="#">Privacy</a></li>
              </div>
            </ul>
          </div>
          <div className="social">
            <a href="#" class="fa-brands fa-facebook-f"> </a>
            <a href="#" class="fa-brands fa-twitter"> </a>
            <a href="#" class="fa-brands fa-instagram"> </a>
          </div>
        </section>
      </footer>
    </React.Fragment>
  );
};

export default Footer;
