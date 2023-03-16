import "./Input.css";

const Input = ({ type, placeholder, className, icon }) => {
  return (
    <div className={`Input-Wrapper Transition Active-Blur ${className}`} tabIndex="0">
      <input className="Input" type={type} placeholder={placeholder} />
      <div className="Input-Icon">{icon}</div>
    </div>
  );
};

export default Input;
