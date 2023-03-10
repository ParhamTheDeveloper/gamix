import { useEffect } from "react";
import IntersectingAnimation from "../Animation/Animation";

const useAnimation = (ref, styles) => {
  useEffect(() => {
    const animation = new IntersectingAnimation(ref.current, styles);
    animation.animate();
  }, []);
};

export default useAnimation;
