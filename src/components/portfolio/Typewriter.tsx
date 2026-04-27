import { useEffect, useState } from "react";

export const Typewriter = ({
  words,
  className = "",
}: {
  words: string[];
  className?: string;
}) => {
  const [i, setI] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[i % words.length];
    const atFull = text === current;
    const atEmpty = text === "";

    let delay = deleting ? 45 : 85;
    if (atFull && !deleting) delay = 1400;
    if (atEmpty && deleting) delay = 250;

    const t = setTimeout(() => {
      if (atFull && !deleting) setDeleting(true);
      else if (atEmpty && deleting) {
        setDeleting(false);
        setI((v) => v + 1);
      } else {
        setText(deleting ? current.slice(0, text.length - 1) : current.slice(0, text.length + 1));
      }
    }, delay);
    return () => clearTimeout(t);
  }, [text, deleting, i, words]);

  return (
    <span className={className}>
      {text}
      <span className="inline-block w-[2px] h-[0.9em] align-[-0.1em] ml-1 bg-primary animate-pulse" />
    </span>
  );
};

export default Typewriter;
