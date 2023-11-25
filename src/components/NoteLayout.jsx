"use client";

import { useState, useEffect } from "react";
import { Footer } from "./Footer.jsx";
import { Headers } from "./Headers.jsx";

export const NoteLayout = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const body = document.body;
    if (darkMode) {
      body.classList.add("darkMode");
    } else {
      body.classList.remove("darkMode");
    }
  }, [darkMode]);

  return (
    <div className={`container ${darkMode ? "darkMode" : ""}`}>
      <Headers handleToggleDarkMode={setDarkMode} />
      {children}
      <Footer />
    </div>
  );
};
