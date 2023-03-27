import React, { useLayoutEffect, useState } from "react";

import { createContext } from "react";

interface MyContextData {
  isAdmin: boolean;
  isDraggable: boolean;
  sideMenuOpened: boolean;
  isTextEditable: boolean;
  isImageEditable: boolean;
  setContextData?: (newData: Partial<MyContextData>) => void;
  setIsDraggable?: (newData: Partial<MyContextData>) => void;
  setTextEditable?: (newData: Partial<MyContextData>) => void;
  setImageEditable?: (newData: Partial<MyContextData>) => void;
}

export const MyContext = createContext<MyContextData | null>(null);

export const MyContextProvider: React.FC = ({ children }: any) => {
  const [contextData, setContextData] = useState<MyContextData>({
    isAdmin: false,
    isDraggable: false,
    isTextEditable: false,
    sideMenuOpened: false,
    isImageEditable: false,
  });

  useLayoutEffect(() => {
    const storedContextData = localStorage.getItem("myContextData");
    if (storedContextData) {
      setContextData(JSON.parse(storedContextData));
    }
  }, []);

  const updateContextData = (newData: Partial<MyContextData>) => {
    setContextData({ ...contextData, ...newData });
  };

  useLayoutEffect(() => {
    localStorage.setItem("myContextData", JSON.stringify(contextData));
  }, [contextData]);

  return (
    <MyContext.Provider
      value={{ ...contextData, setContextData: updateContextData }}
    >
      {children}
    </MyContext.Provider>
  );
};
