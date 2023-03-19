import { useScrollToTop } from "../../../hooks";
import { Button } from "../../Button";
import "./NotFound.css";

const NotFound = () => {
  useScrollToTop();

  return (
    <section className="NotFound Container">
      <div className="NotFound-Inner">
        <div className="NotFound-Image"></div>
        <div className="NotFound-Content">
          <div className="text-white text-center">
            صفحه ی مورد نظر شما پیدا نشد!
          </div>
          <Button link="/">صفحه اصلی</Button>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
