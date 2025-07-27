
// Make sure to run npm install @formspree/react
// For more help visit https://formspr.ee/react-help
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

function ContactForm() {
  return (
    <form action="https://formspree.io/f/xldlbaqr" method="POST">
      <label htmlFor="email">
        Email Address
      </label>
      <input
        id="email"
        type="email"
        name="email"
        required
      />
      <label htmlFor="message">
        Message
      </label>
      <textarea
        id="message"
        name="message"
        required
      />
      <button type="submit">
        Submit
      </button>
    </form>
  );
}

function Contact() {
  return (
    <div style={{ padding: '2rem', maxWidth: '600px', margin: '0 auto' }}>
      <h2>Contact Us</h2>
      <ContactForm />
    </div>
  );
}

export default Contact;