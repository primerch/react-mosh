import useStore from './store';

const A = () => {
  const valueA = useStore((store) => store.valueA);
  const increaseA = useStore((store) => store.increaseA);

  console.log('A Rerendered');
  return (
    <>
      {valueA}
      <button className="btn btn-primary" onClick={() => increaseA()}>
        INCREASE A
      </button>
    </>
  );
};

export default A;
