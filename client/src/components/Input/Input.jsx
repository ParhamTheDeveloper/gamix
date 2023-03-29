import { forwardRef } from "react";
import "./Input.css";

const Input = forwardRef(({ type, placeholder, className, icon }, ref) => (
  <div
    className={`Input-Wrapper Transition Active-Blur ${className}`}
    tabIndex="0"
  >
    <input ref={ref} className="Input" type={type} placeholder={placeholder} />
    <div className="Input-Icon">{icon}</div>
  </div>
));

export default Input;
