import React, { useState } from "react";
import { validateEmail } from "../../utils/helpers";

function ContactForm() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const { name, email, message } = formState;

  const [errorMessage, setErrorMessage] = useState("");

  function handleChange(e) {
    if (e.target.name === "email") {
      const isValid = validateEmail(e.target.value);
      console.log(isValid);
      // isValid conditional statement
      if (!isValid) {
        setErrorMessage("Your email is invalid.");
      } else {
        if (!e.target.value.length) {
          setErrorMessage(`${e.target.name} is required.`);
        } else {
          setErrorMessage("");
        }
      }
    } else if (e.target.name === "name") {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage("");
      }
    } else if (e.target.name === "message") {
        if (!e.target.value.length) {
          setErrorMessage(`${e.target.name} is required.`);
        } else {
          setErrorMessage("");
        }
      }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formState);
  }

  return (
    <>
    <section id="header-img-partial"></section>
        <section className="container contact-container mt-5">
            <h1 className="contact-title d-flex justify-content-center contact-me-title">Contact me</h1>
            <br></br>
        <form id="contact-form" onSubmit={handleSubmit}>
            <div className="conctact-name">
            <label className="form-label" htmlFor="name">
                Name:
            </label>
            <input
                className="form-control"
                type="text"
                defaultValue={name}
                onBlur={handleChange}
                name="name"
            />
            <br></br>
            </div>
            <div className="mb-3">
            <label className="form-label" htmlFor="email">
                Email address:
            </label>
            <input
                className="form-control"
                type="email"
                defaultValue={email}
                name="email"
                onBlur={handleChange}
            />
            <br></br>
            </div>
            <div>
            <label className="form-label" htmlFor="message">
                Message:
            </label>
            <textarea
                className="form-control"
                name="message"
                defaultValue={message}
                onBlur={handleChange}
                rows="5"
            />
            <br></br>
            </div>
            {errorMessage && (
            <div>
                <p className="error-text">{errorMessage}</p>
            </div>
            )}
            <button type="submit" className="btn btn-info btn-lg mb-5">
            Submit
            </button>
        </form>
        </section>
    </>
  );
}

export default ContactForm;
