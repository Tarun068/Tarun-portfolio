import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedin, FaGithub, FaMapMarkerAlt } from "react-icons/fa";
import { profile } from "../../config";
import "./contact.css";

function Contact() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const handleSubmit = async (e) => {
    e.preventDefault();

    // No backend configured yet → fall back to the user's mail client
    if (!profile.formspree) {
      window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(
        `Portfolio message from ${email}`
      )}&body=${encodeURIComponent(message)}`;
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch(profile.formspree, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ email, message }),
      });
      if (res.ok) {
        setStatus("success");
        setEmail("");
        setMessage("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className="section contact">
      <div className="contact__grid">
        <motion.div
          className="contact__intro"
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-kicker">Contact</span>
          <h2 className="section-title">
            Let's build something <span className="gradient-text">together</span>
          </h2>
          <p className="contact__lead">
            I'm open to remote Software Developer roles and freelance work. Drop
            a message and I'll get back to you.
          </p>

          <ul className="contact__list">
            <li>
              <a href={`mailto:${profile.email}`} className="contact__item">
                <span className="contact__item-icon"><FaEnvelope /></span>
                {profile.email}
              </a>
            </li>
            <li>
              <span className="contact__item">
                <span className="contact__item-icon"><FaMapMarkerAlt /></span>
                {profile.location}
              </span>
            </li>
          </ul>

          <div className="contact__socials">
            <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <FaLinkedin size={20} />
            </a>
            <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
              <FaGithub size={20} />
            </a>
          </div>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          className="contact__form"
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <label className="field">
            <span>Your email</span>
            <input
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
          <label className="field">
            <span>Message</span>
            <textarea
              placeholder="Tell me about your project or role..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={6}
              required
            />
          </label>
          <button
            type="submit"
            className="btn btn--primary contact__submit"
            disabled={status === "sending"}
          >
            {status === "sending" ? "Sending..." : "Send message"}
          </button>

          {status === "success" && (
            <p className="contact__status contact__status--ok">
              Thanks! Your message has been sent — I'll get back to you soon.
            </p>
          )}
          {status === "error" && (
            <p className="contact__status contact__status--err">
              Something went wrong. Please email me directly at{" "}
              <a href={`mailto:${profile.email}`}>{profile.email}</a>.
            </p>
          )}
        </motion.form>
      </div>
    </section>
  );
}

export default Contact;
