import React, { useState, useContext } from 'react';
import { ClicksContext } from '../App';

const CompA = () => {
  // Hooks
  // --state
  // ----global
  const clicksContext = useContext(ClicksContext);
  const { dispatch } = clicksContext;

  // ----local
  const [componentButtonClicks, setcomponentButtonClicks] = useState(0);

  // Custom functions
  const clickHandler = () => {
    dispatch({ type: 'INCREMENT' });
    setcomponentButtonClicks(componentButtonClicks + 1);
  };
  return (
    <>
      <h2>Component A</h2>
      <button onClick={clickHandler}>Clicked: {componentButtonClicks}</button>
    </>
  );
};

export default CompA;
