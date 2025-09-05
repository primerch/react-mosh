import useCounterStore from './store';

const Counter = () => {
  const { counter, increment, reset } = useCounterStore();
  return (
    <>
      Value: {counter}
      <button className="btn btn-primary" onClick={() => increment()}>
        Increease
      </button>
      <button className="btn btn-primary" onClick={() => reset()}>
        Reset
      </button>
    </>
  );
};

export default Counter;
