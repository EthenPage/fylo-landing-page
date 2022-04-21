import React from "react";
import FeatureImg from "../Assets/images/illustration-2.svg";
import Arrow from "../Assets/images/icon-arrow.svg";
import Quote from "../Assets/images/icon-quotes.svg";
import Profile from "../Assets/images/avatar-testimonial.jpg";

const Feature = () => {
  return (
    <React.Fragment>
      <section className="feature">
        <div className="wrapper feature-desktop">
          <img className="feature__img" src={FeatureImg} alt="featureimg" />
          <div className="text">
            <h2>Stay productive, wherever you are</h2>
            <p>
              Never let location be an issue when accessing your files. Fylo has
              you covered for all of your file storage needs.
            </p>
            <p>
              Securely share files and folders with friends, family and
              colleagues for live collaboration. No email attachments required!
            </p>
            <div className="works">
              <a href="#">
                See how Fylo works <img className="arrow" src={Arrow} alt="" />
              </a>
            </div>
            <div className="card">
              <img src={Quote} alt="" />
              <p>
                Fylo has improved our team productivity by an order of
                magnitude. Since making the switch our team has become a
                well-oiled collaboration machine.
              </p>
              <div className="profile">
                <img src={Profile} alt="profile" height={50} width={50} />
                <div>
                  <h3>Kyle Burton</h3>
                  <p>Founder & CEO, Huddle</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Feature;
