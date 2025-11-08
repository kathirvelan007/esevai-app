import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <section id="contact" className="contact section">
      <h2>Contact</h2>
      <p>
        📧 Email: <a href="mailto:kathir@example.com">kathir@example.com</a>
      </p>
      <p>
        🔗 LinkedIn:{" "}
        <a
          href="https://www.linkedin.com/in/kathirvelan"
          target="_blank"
          rel="noopener noreferrer"
        >
          linkedin.com/in/kathirvelan
        </a>
      </p>
    </section>
  );
}

export default Contact;
