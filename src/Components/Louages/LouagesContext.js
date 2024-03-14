// LouagesContext.js
import React, { createContext, useState, useEffect } from 'react';
import LouageImage from './louaj.png';

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
  const [id_edited , setId_Edited] = useState('') ;
  const [route_edited , setRoute_Edited] = useState('') ;
  const [error, setError] = useState('');
  const [items, setItems] = useState(getLouagesFromLocalStorage());

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

  const handleSave = () => {
    if (id.length === 0 && route.length === 0) {
      setError('ID and Route are required.');
    } else if (id.length === 0) {
      setError('ID is required.');
    } else if (route.length === 0) {
      setError('Route is required.');
    } else {
      const newLouage = { id, route, src: LouageImage };
      addItem(newLouage);
      setError('');
      setId('');
      setRoute('');
    }
  }; 


  return (
    <LouagesContext.Provider
      value={{
        items,
        deleteItem,
        editItem, // Add editItem to the context value
        addItem,
        route,
        setRoute,
        id,
        setId,
        error,
        handleSave, 
        id_edited , 
        setId_Edited, 
        route_edited , setRoute_Edited ,
        
      }}
    >
      {children}
    </LouagesContext.Provider>
  );
};

export default LouagesContext;
