import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import createSagaMiddleware from 'redux-saga'
import {rootSaga} from "./rootSaga";
import authReducer from 'features/auth/authSlice';
import dashboardReducer from 'features/dashboard/DashBoardSlice';
import studentsReducer from 'features/students/studentSlice';
import cityReducer from 'features/city/citySlice';

const sagaMiddleware =createSagaMiddleware()
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth : authReducer,
    dashboard : dashboardReducer,
    students : studentsReducer,
    city : cityReducer
  },
  devTools: true ,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    thunk: true ,
    immutableCheck : true ,
    serializableCheck: false,
  }).concat(sagaMiddleware),
});
sagaMiddleware.run(rootSaga)
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
