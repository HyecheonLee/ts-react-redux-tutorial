import React, {FunctionComponent} from 'react';

interface OwnProps {
  count: number;
  onIncrease: () => void;
  onDecrease: () => void;
  onIncreaseBy: (diff: number) => void;
}

type Props = OwnProps;

const Counter: FunctionComponent<Props> = ({count, onIncrease, onDecrease, onIncreaseBy}) => {

  return (
      <div>
        <h1>{count}</h1>
        <button onClick={onIncrease}>+1</button>
        <button onClick={onDecrease}>-1</button>
        <button onClick={() => onIncreaseBy(5)}>+5</button>
      </div>
  );
};

export default Counter;
