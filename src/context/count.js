// CountContext.js
import React, { createContext, useContext, useEffect, useState } from "react";

const CountContext = createContext();

export const useCount = () => {
  return useContext(CountContext);
};

export const CountProvider = ({ children }) => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [data, setData] = useState([]);

  const incrementCount1 = () => {
    setCount1((prevCount) => prevCount + 1);
  };

  const incrementCount2 = () => {
    setCount2((prevCount) => prevCount + 1);
  };

  const setData1 = (newData) => {
    console.log(newData);
    setData([...data, newData]);
    console.log(data);
    console.log("till here it hitted");
  };

  return (
    <CountContext.Provider
      value={{
        count1,
        count2,
        incrementCount1,
        incrementCount2,
        data,
        setData1,
      }}
    >
      {children}
    </CountContext.Provider>
  );
};
