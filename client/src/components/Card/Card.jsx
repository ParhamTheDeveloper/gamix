import "./Card.css";
import * as Icons from "react-bootstrap-icons";
import { Picture } from "../Picture";
import { Button } from "../Button";
import { useAnimation } from "../../hooks";
import { useRef } from "react";

const Card = ({
  title,
  episodes,
  people,
  imgsrc,
  btnlink,
  className,
  animationDelay,
}) => {
  const cardRef = useRef(null);

  useAnimation(cardRef, "Card-In-Sight");
  document.body.style.setProperty(
    "--Card-Transition-Delay",
    `${animationDelay * 10}ms`
  );

  return (
    <figure ref={cardRef} className={`Card Transition ${className}`}>
      <Picture src={imgsrc} className="Card-Picture" />
      <p className="text-white my-4">{title}</p>
      <div className="w-fit flex flex-row gap-x-2 items-center justify-center mt-4 text-md text-white">
        <Icons.ViewList /> <span className="text-sm">{episodes} قسمت</span>
      </div>
      <div className="flex flex-row justify-between items-center">
        <div className="w-fit px-4 py-1 my-4 flex flex-row gap-x-2 items-center justify-center rounded-2xl bg-lightblue text-mediumsky">
          <Icons.People /> <span className="text-sm">{people}نفر</span>
        </div>
        <span className="text-md text-lightsky">رایگان ;)</span>
      </div>
      <div className="h-[1px] bg-lightblue rounded-xl mt-auto"></div>
      <Button link={btnlink} className="mt-4 bg-blue-600">
        مشاهده دوره
      </Button>
    </figure>
  );
};

export default Card;
