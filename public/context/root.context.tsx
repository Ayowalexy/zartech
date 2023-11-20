'use client'

import {
  createContext,
  useContext,
  useMemo,
  useState,
  Dispatch,
  SetStateAction,
  ReactNode,
} from 'react';

type RootContextType = {
  inView: boolean;
  setInView: Dispatch<SetStateAction<boolean>>;
};

const RootContext = createContext<RootContextType>({
  inView: false,
  setInView: () => null,
});

export const RootContextProvider = ({ children }: { children: ReactNode }) => {
  const [inView, setInView] = useState<boolean>(false);
  const value = useMemo(() => ({ inView, setInView }), [inView, setInView]);
  return <RootContext.Provider value={value}>{children}</RootContext.Provider>;
};

export const UseAppInView = () => useContext(RootContext);
