import React, { useContext, createContext, useState } from "react";

const GlobalContext = createContext();
export const ContextProvider = ({ children }) => {
  const [hover, setHover] = useState(false);
  const handleMouseOn = (id) => {
    setHover(id);
  };
  const handleMouseLeave = () => {
    setHover(false);
  };
  const handleMouseOnNav = () => {};

  const handleMouseLeaveNav = () => {
    setHover(false);
  };

  return (
    <GlobalContext.Provider
      value={{
        hover,
        setHover,
        handleMouseLeave,
        handleMouseLeaveNav,
        handleMouseOnNav,
        handleMouseOn,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
export const useGlobalContext = () => useContext(GlobalContext);
