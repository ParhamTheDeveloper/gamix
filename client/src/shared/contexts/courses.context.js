import { createContext } from "react";

export const CoursesContext = createContext([]);

export const CoursesProvider = ({ children, value }) => {
  return (
    <CoursesContext.Provider value={value}>{children}</CoursesContext.Provider>
  );
};
