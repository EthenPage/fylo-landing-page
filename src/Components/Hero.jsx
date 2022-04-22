import React from "react";
import HeroImg from "../Assets/images/illustration-1.svg";

const Hero = () => {
  return (
    <React.Fragment>
      <section className="wrapper hero">
        <img src={HeroImg} alt="heroimg" />
        <div className="hero__text">
          <h1>All your files in one secure location, accessible anywhere.</h1>

          <p>
            Fylo stores your most important files in one secure location. Access
            them wherever you need, share and collaborate with friends, family,
            and co-workers.
          </p>

          <form id="emailform" action="#emailform">
            <input
              type="email"
              name="email"
              id="email-hero"
              placeholder="Enter your email.."
              required
            />
            <button>Get Started</button>
          </form>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Hero;
