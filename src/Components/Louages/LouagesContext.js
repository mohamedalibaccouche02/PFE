import React, { createContext, useState, useEffect } from 'react';



const LouagesContext = createContext();

const getLouagesFromLocalStorage = () => {
  const louagesData = localStorage.getItem('louages');
  return louagesData ? JSON.parse(louagesData) : [];
};

const saveLouagesToLocalStorage = (data) => {
  localStorage.setItem('louages', JSON.stringify(data));
};

export const LouagesProvider = ({ children }) => {
  const [id, setId] = useState('');
  const [route, setRoute] = useState('');
  const [error, setError] = useState('');
  const [louageId , setLouageId] = useState('') ; 
  const [items, setItems] = useState(getLouagesFromLocalStorage());
  const [nom , setNom] = useState('') ; 
  const [id_Deleted , setId_Deleted] = useState('') ; 

  useEffect(() => {
    saveLouagesToLocalStorage(items);
  }, [items]);

  const deleteItem = (itemId) => {
    const updatedLouages = items.filter((louage) => louage.id !== itemId);
    saveLouagesToLocalStorage(updatedLouages);
    setItems(updatedLouages);
  };

  const editItem = (itemId, updatedItem) => {
    const updatedLouages = items.map((louage) =>
      louage.id === itemId ? { ...louage, ...updatedItem } : louage
    );
    saveLouagesToLocalStorage(updatedLouages);
    setItems(updatedLouages);
  };

  const addItem = (newItem) => {
    const updatedLouages = [...items, newItem];
    saveLouagesToLocalStorage(updatedLouages);
    setItems(updatedLouages);
  };



  return (
    <LouagesContext.Provider
      value={{
        items,
        deleteItem,
        editItem,
        addItem,
        route,
        setRoute,
        id,
        setId,
        error,
        setError ,
        louageId , 
        setLouageId , 
        nom , 
        setNom , 
        id_Deleted , 
        setId_Deleted
      }}
    >
      {children}
    </LouagesContext.Provider>
  );
};

export default LouagesContext;
