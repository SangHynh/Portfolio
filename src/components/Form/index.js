import "./FormStyles.css"
import React from 'react'

const Form = () => {
  return (
    <div className="form__container">
      <form action="">
        <label htmlFor="">Your name:</label>
        <input type="text" />
        <label htmlFor="">Email:</label>
        <input type="email" />
        <label htmlFor="">Subject:</label>
        <input type="text" />
        <label htmlFor="">Message:</label>
        <textarea type="text" rows={6} placeholder="Type your message here"/>
        <button className="button form-button">Submit</button>
      </form>
    </div>
  )
}

export default Form
