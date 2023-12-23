import { createContext } from "react";

export const QuizContext = createContext();

export const QuizProvaider = ({ children }) => {

    const value = {}
  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
};
