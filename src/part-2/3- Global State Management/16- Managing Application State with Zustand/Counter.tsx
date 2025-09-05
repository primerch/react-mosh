import useStore from './store';

const Counter = () => {
  const { value, increment, decrement, reset } = useStore();
  return (
    <>
      <div className="badge badge-neutral m-5 text-xl">VALUE: {value}</div>
      <div>
        <button className="btn btn-primary m-5" onClick={() => increment()}>
          INCREMENT
        </button>
        <button className="btn btn-secondary m-5" onClick={() => decrement()}>
          DECREMENT
        </button>
        <button className="btn btn-info m-5" onClick={() => reset()}>
          RESET
        </button>
      </div>
    </>
  );
};

export default Counter;
