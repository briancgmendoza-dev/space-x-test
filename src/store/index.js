import { configureStore } from '@reduxjs/toolkit';
import { rootReducers } from './rootReducer';
import { useDispatch, useSelector } from 'react-redux';

const store = configureStore({
  reducer: rootReducers,
});

export const useAppDispatch = () => useDispatch();
export const useAppSelector = useSelector;

export default store;
