import React, { useState, useEffect } from "react";
import "./Typewriter.css";

const Typewriter = ({ text, duration, className, delay }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [typingComplete, setTypingComplete] = useState(false);

  useEffect(() => {
    let index = -1; // Start index from -1 because displayedText is initially ""
    const totalChars = text.length;
    const charDuration = duration / totalChars; // Calculate duration per character

    // Set timeout to delay before starting typing
    const timeout = setTimeout(() => {
      const typeWriter = () => {
        if (index < text.length) {
          index++;
          setDisplayedText((prev) => prev + text.charAt(index));
          setTimeout(typeWriter, charDuration); // Set timeout for typing each character
        } else {
          setTypingComplete(true); // Mark typing as complete
        }
      };
      typeWriter();
    }, delay);

    // Cleanup function to clear timeout on unmount
    return () => clearTimeout(timeout);
  }, [text, duration, delay]);

  return (
    <p
      className={`${className} typewriter ${
        typingComplete ? "typewriter typewriter--complete" : ""
      }`}
    >
      {displayedText}
    </p>
  );
};

export default Typewriter;
