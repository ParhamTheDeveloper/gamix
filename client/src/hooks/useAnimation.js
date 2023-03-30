import { useEffect } from "react";
import { IntersectingAnimation } from "../utils/Animation";

const useAnimation = (ref, styles) => {
  useEffect(() => {
    const animation = new IntersectingAnimation(ref.current, styles);
    animation.animate();
  }, [ref, styles]);
};

export default useAnimation;
