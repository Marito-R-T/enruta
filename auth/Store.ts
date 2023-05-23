import { combineReducers, configureStore } from '@reduxjs/toolkit';
import authReducer from './authReducer';

const rootReducer = combineReducers({
  auth: authReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
export type RootState = ReturnType<typeof rootReducer>;