import React, { useState, createContext } from 'react';

export const FilterContext = createContext();
// Runs the Filter Context Script
const FilterContextProvider = (props) => {
  const [successFilter, setSuccessFilter] = useState(false);
  const [failFilter, setFailFilter] = useState(false);

  // Determines success/fail status filter
  const handleSuccessFilter = (filter) => {
    if (filter === 'success') setSuccessFilter(!successFilter);
    if (filter === 'fail') setFailFilter(!failFilter);
  };

  return (
    <FilterContext.Provider
      value={{ successFilter, failFilter, handleSuccessFilter }}
    >
      {props.children}
    </FilterContext.Provider>
  );
};

export default FilterContextProvider;
