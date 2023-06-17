// CountContext.js
import React, { createContext, useContext, useState } from 'react';

const CountContext = createContext();

export const useCount = () => {
  return useContext(CountContext);
};

export const CountProvider = ({ children }) => {
  const [count1, setCount1] = useState(0);
  const [count2,setCount2]=useState(0);

  const incrementCount1 = () => {
    setCount1((prevCount) => prevCount + 1);
  };

  const incrementCount2=()=>{
    setCount2((prevCount)=>prevCount+1);
  };

 

  return (
    <CountContext.Provider value={{ count1,count2, incrementCount1, incrementCount2 }}>
      {children}
    </CountContext.Provider>
  );
};
