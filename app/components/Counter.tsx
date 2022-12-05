import {Button, Text} from 'react-native';
import React from 'react';
import {
  decrement,
  increment,
  useReduxDispatch,
  useReduxSelector,
} from '../redux';

const Counter = (): React.ReactElement => {
  const value = useReduxSelector(state => state.counter);
  const dispatch = useReduxDispatch();

  return (
    <>
      <Text>{value}</Text>
      <Button title="increment +1" onPress={() => dispatch(increment(1))} />
      <Button title="decrement -1" onPress={() => dispatch(decrement(1))} />
    </>
  );
};

export default Counter;
