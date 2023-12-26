import React, { useState } from "react";

const CountdownContext = React.createContext(null);

const CountdownProvider = ({ children }) => {
  const [event, setevent] = useState(null);

  return (
    <CountdownContext.Provider value={{ event, setevent }}>
      {children}
    </CountdownContext.Provider>
  );
};

export { CountdownContext, CountdownProvider };
