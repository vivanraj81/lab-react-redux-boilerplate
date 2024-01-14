import React, { useState, useEffect } from 'react';
import { createStore } from 'redux';
import reducer from './Reducer';
import { incrementNumber, decrementNumber } from './Actions';

const store = createStore(reducer);

export default function Counter() {
  const [count, setCounter] = useState(store.getState().count);

  useEffect(() => {
    const unsubscribe = store.subscribe(() => setCounter(store.getState().count));
    return unsubscribe;
  }, []);

  return (
    <div>
      <h3 style={{fontSize: '80px'}}>{count}</h3>
      <button  style={{fontSize: '30px'}} onClick={() => store.dispatch(incrementNumber())}>Like</button>
      <button  style={{fontSize: '30px'}} onClick={() => store.dispatch(decrementNumber())}>Unlike</button>
    </div>
  );
}