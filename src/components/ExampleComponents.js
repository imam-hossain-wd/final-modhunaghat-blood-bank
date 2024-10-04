
'use client'
import { decrement, increment } from '@/redux/slice/someSlice';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { useGetUsersQuery } from '@/redux/api/userApi';
// import { increment, decrement } from '../redux/someSlice';

const ExampleComponent = () => {
  const dispatch = useAppDispatch();
  const {data, isLoading, isError}= useGetUsersQuery(undefined);
  const value = useAppSelector((state) => state.some.value);

  console.log(data, 'user data');

  if(isLoading){
    return <p>Loading.....</p>
  }

  return (
    <div>
      <button onClick={() => dispatch(decrement())}>-</button>
      <span>{value}</span>
      <button onClick={() => dispatch(increment())}>+</button>
    </div>
  );
};

export default ExampleComponent;
