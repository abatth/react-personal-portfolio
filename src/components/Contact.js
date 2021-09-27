import React, { useState, useEffect } from "react";
import "./Contact.css";
import emailjs from "emailjs-com";
import { FaEnvelope, FaPhoneAlt, FaLocationArrow } from "react-icons/fa";

const Result = () => {
  return (
    <p className="result_message">
      Your message has been sent. I will contact you as soon as possible.
    </p>
  );
};

const Contact = () => {
  const [result, setResult] = useState(false);

  const [enteredName, setEnteredName] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredSubject, setEnteredSubject] = useState("");
  const [enteredMessage, setEnteredMessage] = useState("");
  const [formIsValid, setFormIsValid] = useState(false);

  const [validNameCheck, setValidNameCheck] = useState(true);
  const [validEmail, setValidEmail] = useState(true);
  const [validSubject, setValidSubject] = useState(true);
  const [validMessage, setValidMessage] = useState(true);

  useEffect(() => {
    setFormIsValid(
      enteredName.trim().length > 1 &&
        enteredEmail.includes("@") &&
        enteredSubject.trim().length > 2 &&
        enteredMessage.trim().length > 3
    );
    console.log(enteredName);
  }, [enteredName, enteredEmail, enteredSubject, enteredMessage]);

  const nameChangeHandler = (e) => {
    setEnteredName(e.target.value);
  };

  const emailChangeHandler = (e) => {
    setEnteredEmail(e.target.value);
  };

  const subjectChangeHandler = (e) => {
    setEnteredSubject(e.target.value);
  };

  const messageChangeHandler = (e) => {
    setEnteredMessage(e.target.value);
  };

  const validateNameHandler = () => {
    setValidNameCheck(enteredName.trim().length > 1);
  };

  const validateEmailHandler = () => {
    setValidEmail(enteredEmail.includes("@"));
  };

  const validSubjectHandler = () => {
    setValidSubject(enteredSubject.trim().length > 2);
  };

  const validMessageHandler = () => {
    setValidMessage(enteredMessage.trim().length > 3);
  };

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
        // console.log(res);
        // console.log(JSON.stringify(res));
      })
      .catch((err) => console.log(err));

    e.target.reset(); //reset the fields after submit

    setResult(true);
  };
  return (
    <section id="contact">
      <div className="section__intro">
        <h2>Contact Me</h2>
        <span>Let's get in touch!</span>
      </div>

      <div className="contact__container">
        <div>
          <div className="contact__information">
            {/* <i className="uil uil-map-marker contact__icon"></i> */}
            <div>
              <h3 className="contact__title">
                <FaLocationArrow style={{ color: "#5785E0" }} /> Location
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
                <FaEnvelope style={{ color: "#5785E0" }} /> Email
              </h3>
              <span className="contact__subtitle">amanveer@ualberta.ca</span>
            </div>
          </div>

          <div className="contact__information">
            {/* <i className="uil uil-phone contact__icon"></i> */}
            <div>
              <h3 className="contact__title">
                <FaPhoneAlt style={{ color: "#5785E0" }} /> Phone
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
                className={
                  validNameCheck === false
                    ? "contact__input invalid"
                    : "contact__input"
                }
                placeholder="Name*"
                onChange={nameChangeHandler}
                onBlur={validateNameHandler}
                required
              />
              {!validNameCheck && (
                <p
                  style={{
                    textAlign: "center",
                    fontSize: "0.9rem",
                    color: "red",
                  }}
                >
                  Please enter your name.
                </p>
              )}
            </div>
            <div className="contact__content">
              <input
                type="email"
                name="user_email"
                className={
                  validEmail === false
                    ? "invalid contact__input"
                    : "contact__input"
                }
                placeholder="Email*"
                onChange={emailChangeHandler}
                onBlur={validateEmailHandler}
                required
              />
              {!validEmail && (
                <p
                  style={{
                    textAlign: "center",
                    fontSize: "0.9rem",
                    color: "red",
                  }}
                >
                  Please enter your email.
                </p>
              )}
            </div>

            <div className="contact__content">
              <input
                type="text"
                name="subject"
                className={
                  validSubject === false
                    ? "invalid contact__input"
                    : "contact__input"
                }
                placeholder="Subject*"
                onChange={subjectChangeHandler}
                onBlur={validSubjectHandler}
                required
              />
              {!validSubject && (
                <p
                  style={{
                    textAlign: "center",
                    fontSize: "0.9rem",
                    color: "red",
                  }}
                >
                  Please enter a subject.
                </p>
              )}
            </div>
            <div className="contact__content">
              <textarea
                name="message"
                id=""
                cols="0"
                rows="7"
                className={
                  validMessage === false
                    ? "invalid contact__input"
                    : "contact__input"
                }
                placeholder="Message*"
                onChange={messageChangeHandler}
                onBlur={validMessageHandler}
                required
              />
              {!validMessage && (
                <p
                  style={{
                    textAlign: "center",
                    fontSize: "0.9rem",
                    color: "red",
                    marginBottom: "1rem",
                  }}
                >
                  Please leave a message.
                </p>
              )}
            </div>

            <div className="btn__container">
              <button
                type="submit"
                className="btn-contact"
                disabled={!formIsValid}
              >
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
