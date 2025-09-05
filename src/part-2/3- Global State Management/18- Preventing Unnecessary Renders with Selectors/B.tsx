import useStore from './store';

const B = () => {
  const valueB = useStore((store) => store.valueB);
  const increaseB = useStore((store) => store.increaseB);

  console.log('B Rerendered');
  return (
    <>
      {valueB}
      <button className="btn btn-primary" onClick={() => increaseB()}>
        INCREASE B
      </button>
    </>
  );
};

export default B;
