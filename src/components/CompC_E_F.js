import React, { useState, useContext } from 'react';
import { ClicksContext } from '../App';

const CompC_E_F = () => {
  // Hooks
  // --state
  // ----global
  const clickContext = useContext(ClicksContext);
  const { dispatch } = clickContext;

  // ----local
  const [buttonClicks, setbuttonClicks] = useState(0);

  // custom functions
  const clickHandler = () => {
    dispatch({ type: 'INCREMENT' });
    setbuttonClicks(buttonClicks + 1);
  };
  return (
    <>
      <h4>Component F</h4>
      <button onClick={clickHandler}>Clicked: {buttonClicks}</button>
    </>
  );
};

export default CompC_E_F;
