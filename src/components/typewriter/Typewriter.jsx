import React, { useEffect, useState } from "react";
import "./typewriter.css";

const Typewriter = ({
  words,
  className = "",
  typeSpeed = 90,
  deleteSpeed = 45,
  pause = 1500,
  startDelay = 0,
  loop = true,
}) => {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [started, setStarted] = useState(startDelay === 0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (started) return;
    const t = setTimeout(() => setStarted(true), startDelay);
    return () => clearTimeout(t);
  }, [started, startDelay]);

  useEffect(() => {
    if (!started || done) return;
    const current = words[index % words.length];

    // Finished typing the current word
    if (!deleting && text === current) {
      if (!loop && index === words.length - 1) {
        setDone(true); // stop on the last word, keep it on screen
        return;
      }
      const t = setTimeout(() => setDeleting(true), pause);
      return () => clearTimeout(t);
    }

    // Finished deleting — move to next word
    if (deleting && text === "") {
      setDeleting(false);
      setIndex((i) => i + 1);
      return;
    }

    const t = setTimeout(
      () =>
        setText((prev) =>
          deleting
            ? current.slice(0, prev.length - 1)
            : current.slice(0, prev.length + 1)
        ),
      deleting ? deleteSpeed : typeSpeed
    );
    return () => clearTimeout(t);
  }, [text, deleting, index, started, done, words, loop, typeSpeed, deleteSpeed, pause]);

  return (
    <span className="typewriter">
      <span className={className}>{text}</span>
      {!done && <span className="typewriter__cursor" aria-hidden="true" />}
    </span>
  );
};

export default Typewriter;
