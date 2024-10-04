
'use client'
import { decrement, increment } from '@/redux/slice/someSlice';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
// import { increment, decrement } from '../redux/someSlice';

const ExampleComponent = () => {
  const dispatch = useAppDispatch();
  const value = useAppSelector((state) => state.some.value);

  return (
    <div>
      <button onClick={() => dispatch(decrement())}>-</button>
      <span>{value}</span>
      <button onClick={() => dispatch(increment())}>+</button>
    </div>
  );
};

export default ExampleComponent;
