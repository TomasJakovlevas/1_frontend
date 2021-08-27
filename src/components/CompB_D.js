import React, { useState, useContext } from 'react';
import { ClicksContext } from '../App';

const CompB_D = () => {
  // Hooks
  // --state
  // ----global
  const clicksContext = useContext(ClicksContext);
  const { dispatch } = clicksContext;

  // ----local
  const [buttonClicks, setbuttonClicks] = useState(0);

  // custom functions
  const clickHandler = () => {
    dispatch({ type: 'INCREMENT' });
    setbuttonClicks(buttonClicks + 1);
  };
  return (
    <>
      <h3>Component D</h3>
      <button onClick={clickHandler}>Clicked: {buttonClicks}</button>
    </>
  );
};

export default CompB_D;
