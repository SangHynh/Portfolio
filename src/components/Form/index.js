import "./FormStyles.css";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Form = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        {
          publicKey: process.env.REACT_APP_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
          console.log(process.env.REACT_APP_SERVICE_ID);
        }
      );
    e.target.reset();
  };

  return (
    <div className="form__container">
      <form ref={form} onSubmit={sendEmail}>
        <label>Your name:</label>
        <input type="text" name="user_name" />
        <label>Email:</label>
        <input type="email" name="user_email" />
        <label>Subject:</label>
        <input type="text" name="subject" />
        <label>Message:</label>
        <textarea
          name="message"
          type="text"
          rows={6}
          placeholder="Type your message here"
        />
        <button className="button form-button" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
