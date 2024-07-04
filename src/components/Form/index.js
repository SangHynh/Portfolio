import "./FormStyles.css";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Toast from "../Toast";

const Form = () => {
  const form = useRef();
  const [toast, setToast] = useState(null);

  const showToast = (message, type) => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3000);
  };

  const handleSuccess = () => {
    showToast('Send mail succeeded!', 'success');
  };

  const handleError = () => {
    showToast('An error occurred...', 'error');
  };

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
          handleSuccess();
        },
        (error) => {
          handleError();
        }
      );
    e.target.reset();
  };

  return (
    <div className="form__container">
      <form ref={form} onSubmit={sendEmail}>
        <label>Your name:</label>
        <input type="text" name="user_name" required/>
        <label>Email:</label>
        <input type="email" name="user_email" required/>
        <label>Subject:</label>
        <input type="text" name="subject" required/>
        <label>Message:</label>
        <textarea
          name="message"
          type="text"
          rows={6}
          placeholder="Type your message here"
          required
        />
        <button className="button form-button" type="submit">
          Submit
        </button>
      </form>
      {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}

    </div>
  );
};

export default Form;
