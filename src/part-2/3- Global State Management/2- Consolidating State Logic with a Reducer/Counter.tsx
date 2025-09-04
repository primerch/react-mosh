import { useReducer } from 'react';
import counterReducer from './CounterReducer';

const Counter = () => {
  const [value, dispatch] = useReducer(counterReducer, 0);
  return (
    <>
      Value: {value}
      <button
        className="btn btn-primary"
        onClick={() => dispatch({ type: 'INCREMENT' })}
      >
        Increease
      </button>
      <button
        className="btn btn-primary"
        onClick={() => dispatch({ type: 'RESET' })}
      >
        Reset
      </button>
    </>
  );
};

export default Counter;
