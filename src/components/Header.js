import React from "react";
import "./Header.css";
import { useLanguage } from "../LanguageContext";
import { useTheme } from "../ThemeContext";

function Header() {
     const { lang, toggleLanguage } = useLanguage();
     const { darkMode, toggleTheme } = useTheme();
  return (
    <header className="header">
      {/* <h1 className="logo">Kathirvelan Portfolio</h1> */}
       <h1 lassName="logo">{lang === "en" ? "E-Sevai Maiyam Theni" : "இ-சேவை மையம் தேனி"}</h1>
      <nav className="nav">
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>

       

      <button onClick={toggleLanguage} className="lang-btn">
        {lang === "en" ? "தமிழ்" : "English"}
      </button>

    <button onClick={toggleTheme} className="theme-btn">
          {darkMode ? "☀️ Light" : "🌙 Dark"}
        </button>

    </header>
  );
}

export default Header;
