import { useRef } from "react";
import { Button } from "../Button";
import "./Snippet.css";

const Snippet = ({ codes, extension }) => {
  const codeRef = useRef(null);

  const handleCopyClick = () => {
     navigator.clipboard.writeText(codeRef.current.textContent);
  };

  return (
    <div className="Snippet">
      <div className="w-full h-12 flex flex-row justify-between items-center rounded-tl-lg rounded-tr-lg bg-slate-700">
        <div className="mx-8">{extension}</div>
        <Button
          className="h-full rounded-none rounded-tl-lg"
          onClick={handleCopyClick}
        >
          کپی
        </Button>
      </div>
      <pre className="Snippet-Pre ScrollX">
        <code className="Snippet-Code" ref={codeRef}>{codes}</code>
      </pre>
    </div>
  );
};

export default Snippet;
