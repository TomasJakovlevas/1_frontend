import './App.css';

import React, { useReducer } from 'react';

// Components
import CompA from './components/CompA';
import CompB from './components/CompB';
import CompC from './components/CompC';
// import Counter from './components/Counter';

// Context (for managing global state)
export const ClicksContext = React.createContext();

// useReducer inital state
let initalClickState = { clicks: 0 };

// useReducer reducer func
const clickReducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { clicks: state.clicks + 1 };
    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(clickReducer, initalClickState);

  return (
    <div>
      {/* <Counter /> */}
      <ClicksContext.Provider value={{ dispatch }}>
        <h1>
          Buttons clicked <u>{state.clicks}</u> times
        </h1>
        <CompA />
        <CompB />
        <CompC />
      </ClicksContext.Provider>
    </div>
  );
}

export default App;
