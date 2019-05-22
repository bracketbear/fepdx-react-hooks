import React, { useReducer } from 'react';

const initialState = {count: 0};

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return {count: state.count + 1};
    default:
      return state;
  }
}

const UseReducerButton = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
      <button 
        className="button button__stateless" 
        onClick={() => dispatch({type: 'increment'})}>Count = {state.count}</button>
  );
};

export default UseReducerButton;