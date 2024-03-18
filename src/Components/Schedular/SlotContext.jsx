import React, { createContext, useContext, useState } from 'react';

const SlotContext = createContext();

export const SlotProvider = ({ children }) => {
  const [selectedSlot, setSelectedSlot] = useState(null);

  const handleSelectSlot = (slotInfo) => {
    setSelectedSlot(slotInfo);
  };

  return (
    <SlotContext.Provider 
      value={{
        selectedSlot,
        handleSelectSlot,
      }}
    >
      {children}
    </SlotContext.Provider>
  );
};

export const useSlotContext = () => {
  return useContext(SlotContext);
};
