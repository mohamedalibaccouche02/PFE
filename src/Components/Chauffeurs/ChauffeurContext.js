import React, { createContext, useState, useEffect } from 'react';

const ChauffeurContext = createContext();

const getChauffeursFromLocalStorage = () => {
  const ChauffeursData = localStorage.getItem('Chauffeurs');
  return ChauffeursData ? JSON.parse(ChauffeursData) : [];
};

const saveChauffeursToLocalStorage = (data) => {
  localStorage.setItem('Chauffeurs', JSON.stringify(data));
};

export const ChauffeursProvider = ({ children }) => {
  const [id, setId] = useState('');
  const[chauffeurId,setChauffeurId]=useState('');
  const [nom, setNom] = useState('');
  const [nom_edited, setNom_Edited] = useState('');
  const [salaire, setSalaire] = useState('');
  const [salaire_edited, setSalaire_Edited] = useState('');
  const [startWork, setStartWork] = useState('');
  const [endWork, setEndWork] = useState('');
  const[color,setColor]=useState('');
  const [error, setError] = useState('');
  const [items, setItems] = useState(getChauffeursFromLocalStorage());

  useEffect(() => {
    saveChauffeursToLocalStorage(items);
  }, [items]);

  const deleteItem = (itemId) => {
    const updatedChauffeurs = items.filter((chauffeur) => chauffeur.id !== itemId);
    saveChauffeursToLocalStorage(updatedChauffeurs);
    setItems(updatedChauffeurs);
  };

  const editItem = (nom, updatedItem) => {
    const updatedChauffeurs = items.map((chauffeur) =>
      chauffeur.nom === nom ? { ...chauffeur, ...updatedItem } : chauffeur
    );
    saveChauffeursToLocalStorage(updatedChauffeurs);
    setItems(updatedChauffeurs);
  };

  const addItem = (newItem) => {
    const updatedChauffeurs = [...items, newItem];
    saveChauffeursToLocalStorage(updatedChauffeurs);
    setItems(updatedChauffeurs);
  };

 

  return (
    <ChauffeurContext.Provider
      value={{
        items,
        deleteItem,
        editItem,
        addItem,
        id,
        setId,
        nom,
        setNom,
        salaire,
        setSalaire,
        startWork,
        setStartWork,
        endWork,
        setEndWork,
        error,
        setError,
        nom_edited,
        setNom_Edited,
        salaire_edited,
        setSalaire_Edited,
        color,
        setColor,
        chauffeurId,
        setChauffeurId
      }}
    >
      {children}
    </ChauffeurContext.Provider>
  );
};

export default ChauffeurContext;
