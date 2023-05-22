import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { eventApi } from '@/redux/reducers/eventReducer';
import { authApi } from '@/redux/reducers/userReducer';
import authReducer from '@/redux/authSlice';
import eventsReducer from '@/redux/eventsSlice';

const rootReducer = combineReducers({
  [eventApi.reducerPath]: eventApi.reducer,
  [authApi.reducerPath]: authApi.reducer,
  auth: authReducer,
  events: eventsReducer,
});

const middlewares = [eventApi.middleware, authApi.middleware];

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(middlewares),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
