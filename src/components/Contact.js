import React, { useState } from "react";
import "./Contact.css";
import emailjs from "emailjs-com";

const Result = () => {
  return (
    <p className="result_message">
      Your message has been sent. I will contact you as soon as possible.
    </p>
  );
};

const Contact = () => {
  const [result, setResult] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_kzg20mi",
        "template_b04tpun",
        e.target,
        "user_JErAeyFRzkSKEzaprdLDv"
      )
      .then((res) => {
        console.log(res);
        console.log(JSON.stringify(res));
      })
      .catch((err) => console.log(err));

    e.target.reset(); //reset the fields after submit

    setResult(true);
  };
  return (
    <section id="contact">
      <div className="section__intro">
        <h2>Contact Me</h2>
        <span>Get in touch</span>
      </div>

      <div className="contact__container">
        <div>
          <div class="contact__information">
            {/* <i className="uil uil-map-marker contact__icon"></i> */}
            <div>
              <h3 className="contact__title">
                <i className="uil uil-map-marker contact__icon"></i>Location
              </h3>
              <span className="contact__subtitle">
                Sherwood Park, AB, Canada
              </span>
            </div>
          </div>

          <div className="contact__information">
            {/* <i className="uil uil-envelope contact__icon"></i> */}
            <div>
              <h3 className="contact__title">
                <i className="uil uil-envelope contact__icon"></i>Email
              </h3>
              <span className="contact__subtitle">GET NEW EMAIL</span>
            </div>
          </div>

          <div className="contact__information">
            {/* <i className="uil uil-phone contact__icon"></i> */}
            <div>
              <h3 className="contact__title">
                <i className="uil uil-phone contact__icon"></i> Phone
              </h3>
              <span className="contact__subtitle">780-953-5110</span>
            </div>
          </div>
        </div>

        <form className="contact__form" onSubmit={submitHandler}>
          <div className="contact__inputs">
            <div className="contact__content">
              <input
                type="text"
                name="name"
                className="contact__input"
                placeholder=" Name"
                required
              />
            </div>
            <div className="contact__content">
              <input
                type="email"
                name="user_email"
                className="contact__input"
                placeholder=" Email"
                required
              />
            </div>

            <div className="contact__content">
              <input
                type="text"
                name="subject"
                className="contact__input"
                placeholder=" Subject"
                required
              />
            </div>
            <div className="contact__content">
              <textarea
                name="message"
                id=""
                cols="0"
                rows="7"
                class="contact__input"
                placeholder=" Message"
                required
              ></textarea>
            </div>

            <div className="btn__container">
              <button type="submit" className="btn-contact">
                Send Message
                <i className="uil uil-message button__icon"></i>
              </button>
            </div>
          </div>
        </form>
      </div>
      <div>{result ? <Result /> : null}</div>
    </section>
  );
};

export default Contact;
