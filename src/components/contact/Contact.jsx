import React, { useState } from "react";
import "./contact.css";

function Contact() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const mailtoLink = `mailto:tarunmaheshwari055@gmail.com?subject=Message from ${email}&body=${encodeURIComponent(
      message
    )}`;

    window.location.href = mailtoLink;
  };

  return (
    <section className="contact-container">
      <h2>Contact Me</h2>
      <p style={{ fontSize: "larger" }}>
        Please contact me directly at{" "}
        <a className="mail-link" href="mailto:tarunmaheshwari055@gmail.com">
          tarunmaheshwari055@gmail.com
        </a>{" "}
        or through this form.
      </p>
      <form onSubmit={handleSubmit} className="contact-form">
        <input
          type="email"
          placeholder="Your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <textarea
          placeholder="Your message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={10}
          required
        />
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

export default Contact;
