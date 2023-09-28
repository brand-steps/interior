// MyContext.js
import React, { createContext, useState } from 'react';

const MyContext = createContext();

const MyContextProvider = ({ children }) => {
  const [name, setName] = useState('');
  const [pricep , setPricep] = useState('');
  const [description, setDescription] = useState('');
  const [image , setImage ] = useState(''); 
  const [quantityProduct  , setQuantityProduct ] = useState(''); 
  // Add more state variables using useState

  return (
    <MyContext.Provider
      value={{
        name, setName,
        pricep  , setPricep,
        description , setDescription , 
        image , setImage, 
        quantityProduct , setQuantityProduct, 
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export { MyContext, MyContextProvider };
