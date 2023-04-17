import { configureStore } from '@reduxjs/toolkit';
import catalogReducer from './slices/catalogSlice';
import filterReducer from './slices/filterSlice';

export const store = configureStore({
  reducer: {
    catalog: catalogReducer,
    filter: filterReducer,
  },
});

export * from './slices/filterSlice';
export * from './thunks/fetchItems';
