import "./Snippet.css";
import { Check2, Clipboard } from "react-bootstrap-icons";
import { Button } from "../Button";
import { useRef, useState } from "react";

const Snippet = ({ codes, extension, className }) => {
  const codeRef = useRef(null);
  const [alreadyCopied, setAlreadyCopied] = useState(false);

  const handleCopyClick = (e) => {
    let text = codeRef.current.textContent;
    navigator.clipboard.writeText(text);
    e.currentTarget.classList.add("!bg-green-400");
    setAlreadyCopied(true);
    setTimeout(
      (elem) => {
        elem.classList.remove("!bg-green-400");
        setAlreadyCopied(false);
      },
      3000,
      e.currentTarget
    );
  };

  return (
    <div className={`Snippet ${className}`}>
      <div className="w-full h-12 flex flex-row justify-between items-center rounded-tl-lg rounded-tr-lg bg-slate-700">
        <div className="mx-8">{extension}</div>
        <Button
          className="w-32 h-full !rounded-none !rounded-tl-lg"
          onClick={handleCopyClick}
        >
          {alreadyCopied ? (
            <Check2 />
          ) : (
            <span className="flex flex-row justify-center item-center gap-x-2">
              <Clipboard /> کپی
            </span>
          )}
        </Button>
      </div>
      <pre className="Snippet-Pre ScrollX">
        <code className="Snippet-Code" ref={codeRef}>
          {codes}
        </code>
      </pre>
    </div>
  );
};

export default Snippet;
