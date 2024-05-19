import React, { createContext, useState, useContext } from 'react';

const ChaufferContext = createContext(null);

export const ChaufferProvider = ({ children }) => {
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");

    return (
        <ChaufferContext.Provider value={{ password, setPassword, username, setUsername }}>
            {children}
        </ChaufferContext.Provider>
    );
};

export const useChauffer = () => useContext(ChaufferContext);