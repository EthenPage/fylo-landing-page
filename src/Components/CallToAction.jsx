import React from "react";
const CallToAction = () => {
  return (
    <React.Fragment>
      <section className="calltoaction">
        <div className="wrapper">
            <div className="call-text">
                <h3>Get early access today</h3>
                <p>
                  It only takes a minute to sign up and our free starter tier is
                  extremely generous. If you have any questions, our support team would
                  be happy to help you.
                </p>
            </div>
            <form className="callform" action="">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="email@example.com"
                required
              />
              <button>Get Started For Free</button>
            </form>
        </div>
      </section>
    </React.Fragment>
  );
};

export default CallToAction;
