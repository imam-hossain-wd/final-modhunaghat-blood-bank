// redux/hooks.js
import { useDispatch, useSelector } from 'react-redux';
import { makeStore } from './store';

export const useAppDispatch = () => useDispatch();
export const useAppSelector = useSelector;
