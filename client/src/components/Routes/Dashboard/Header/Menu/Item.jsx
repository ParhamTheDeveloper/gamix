import { Button } from "../../../../Button";
import "./Item.css";

const Item = ({ children, className, icon, onClick }) => {
  return (
    <Button
      className={`Dashboard-Header-Menu-Item ${className}`}
      onClick={onClick}
    >
      {icon} {children}
    </Button>
  );
};

export default Item;
