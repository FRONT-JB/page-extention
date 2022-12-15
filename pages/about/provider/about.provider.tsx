import {
  createContext,
  ReactNode,
  RefObject,
  useContext,
  useMemo,
  useRef,
  useState,
} from "react";

export type WeighingContextType = {
  text: string;
};

export const WeighingContext = createContext<WeighingContextType | undefined>(
  undefined
);

export const WeighingProvider = ({ children }: { children: ReactNode }) => {
  const text = "Provider";
  const value = useMemo<WeighingContextType>(() => ({ text }), [text]);

  return (
    <WeighingContext.Provider value={value}>
      {children}
    </WeighingContext.Provider>
  );
};

export const useWeighingContext = () => {
  return useContext(WeighingContext);
};
