import React, {FunctionComponent} from "react";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../modules";
import {decrease, increase, increaseBy} from "../modules/counter";
import Counter from "../components/Counter";

interface OwnProps {
}

type Props = OwnProps;

const CounterContainer: FunctionComponent<Props> = props => {
  const count = useSelector((state: RootState) => state.counter.count);
  const dispatch = useDispatch();
  const onIncrease = () => {
    dispatch(increase());
  };
  const onDecrease = () => {
    dispatch(decrease());
  };
  const onIncreaseBy = (diff: number) => {
    dispatch(increaseBy(diff));
  };
  return (
      <Counter
          count={count}
          onIncrease={onIncrease}
          onDecrease={onDecrease}
          onIncreaseBy={onIncreaseBy}
      />
  );
};

export default CounterContainer;
