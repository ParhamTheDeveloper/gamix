import "./Accordion.css";
import { useRef } from "react";
import { ChevronLeft, Eye } from "react-bootstrap-icons";
import { Button } from "../Button";

const Accordion = ({ children, title, extra, className }) => {
  const accordionRef = useRef(null);
  const arrowRef = useRef(null);
  const contentRef = useRef(null);

  const handleClick = () => {
    arrowRef.current.classList.toggle("Accordion-Open");
    contentRef.current?.classList.toggle("Accordion-Open");
  };

  return (
    <div ref={accordionRef} className={`Accordion ${className}`}>
      <div className="Accordion-Item">
        <div className="Accordion-Title" onClick={handleClick}>
          <div>{title}</div>
          <div className="Accordion-Left">
            {extra}
            <ChevronLeft
              ref={arrowRef}
              className="Accordion-Arrow Transition"
            />
            <Button className="md:!hidden mr-auto">
              <Eye /> مشاهده
            </Button>
          </div>
        </div>
        <div ref={contentRef} className="Accordion-Content Transition">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Accordion;
