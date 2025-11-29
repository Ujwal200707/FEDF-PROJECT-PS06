import React, { createContext, useContext, useState } from 'react';
import mockFunds from '../data/mockFunds';

const FundsContext = createContext();

export const useFunds = () => {
  const context = useContext(FundsContext);
  if (!context) {
    throw new Error('useFunds must be used within a FundsProvider');
  }
  return context;
};

export const FundsProvider = ({ children }) => {
  const [funds] = useState(mockFunds);
  const [selectedFunds, setSelectedFunds] = useState([]);

  const addToComparison = (fund) => {
    if (!selectedFunds.find(f => f.id === fund.id)) {
      setSelectedFunds([...selectedFunds, fund]);
    }
  };

  const removeFromComparison = (fundId) => {
    setSelectedFunds(selectedFunds.filter(f => f.id !== fundId));
  };

  const value = {
    funds,
    selectedFunds,
    addToComparison,
    removeFromComparison
  };

  return (
    <FundsContext.Provider value={value}>
      {children}
    </FundsContext.Provider>
  );
};
