import React, { useState } from "react";
import "./About.css";
import { useLanguage } from "../LanguageContext";

function About() {

   const { lang } = useLanguage();

  return (
    <section id="about" className="about section">
      {lang === "en" ? (
        <>
          <h2>About Me</h2>
          <p>
            Hi, I'm <strong>Kathirvelan</strong> — a passionate developer
            experienced in Java Spring Boot and React.js. I enjoy learning new
            technologies and building meaningful software solutions.
          </p>
        </>
      ) : (
        <>
          <h2>என்னை பற்றி</h2>
          <p>
            வணக்கம், நான் <strong>கதிர்வேலன்</strong> — Java Spring Boot மற்றும்
            React.js-ல் அனுபவம் பெற்ற டெவலப்பர். புதிய தொழில்நுட்பங்களை
            கற்றுக்கொள்வதும் பயனுள்ள மென்பொருள் தீர்வுகளை உருவாக்குவதும் எனக்கு
            பிடிக்கும்.
          </p>
        </>
      )}
    </section>
  );
}

export default About;
