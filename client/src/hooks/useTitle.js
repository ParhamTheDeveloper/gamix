import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    if (title) {
      document.title = title + " | گیمیکس";
    }
  }, [title]);
};

export default useTitle;
