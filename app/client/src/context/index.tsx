import { createContext } from "react";

interface MyContextData {
  isAdmin: boolean;
  isDraggable: boolean;
  setContextData?: (newData: Partial<MyContextData>) => void;
  setIsDraggable?: (newData: Partial<MyContextData>) => void;
}

export const MyContext = createContext<MyContextData | null>(null);

import React, { useState } from "react";

export const MyContextProvider: React.FC = ({ children }: any) => {
  const [contextData, setContextData] = useState<MyContextData>({
    isAdmin: false,
    isDraggable: false,
  });

  const updateContextData = (newData: Partial<MyContextData>) => {
    setContextData({ ...contextData, ...newData });
  };

  return (
    <MyContext.Provider
      value={{ ...contextData, setContextData: updateContextData }}
    >
      {children}
    </MyContext.Provider>
  );
};
