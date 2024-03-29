import "./Button.css";
import { NavLink } from "react-router-dom";

const Button = ({ children, className, link, onClick }) => {
  const handleClick = (event) => {
    const button = event.currentTarget;
    const circle = document.createElement("span");
    const dia = Math.max(button.clientWidth, button.clientHeight); // determining the max value between width and height
    const radius = dia / 2; // circle radius must 50% of real width
    circle.style.width = circle.style.height = `${dia}px`;
    circle.style.left = `${event.clientX - (button.offsetLeft + radius)}px`;
    circle.style.top = `${event.clientY - (button.offsetTop + radius)}px`;
    circle.classList.add("Button-Ripple");
    const ripple = button.querySelectorAll(".ripple")[0];
    if (ripple) {
      ripple.remove();
    }
    button.appendChild(circle);
    if (onClick) {
      onClick(event); // handler prop
    }
  };

  return (
    <>
      {link && (
        <NavLink
          to={link}
          className={`Button Transition ${className}`}
          onMouseDown={handleClick}
          style={({ isActive }) => {
            if (isActive) {
              return { background: "rgb(58 80 107)" };
            }
          }}
        >
          {children}
        </NavLink>
      )}
      {!link && (
        <div
          className={`Button Transition ${className}`}
          onMouseDown={handleClick}
        >
          {children}
        </div>
      )}
    </>
  );
};

export default Button;
