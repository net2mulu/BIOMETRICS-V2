import { createContext,useState } from "react";

export const HomeContext = createContext();

export const HomeProvider = ({ children }) => {
  const [result, setResult] = useState(false);

  return (
    <HomeContext.Provider
      value={{
        result,
        setResult,
      }}
    >
      {children}
    </HomeContext.Provider>
  );
};
