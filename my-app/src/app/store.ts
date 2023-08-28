import { configureStore, ThunkAction, Action, combineReducers } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { apiSlice } from '../features/apiSlice';
import cartReducer from '../features/cartSlice';
import productReducer from '../features/product';
import authReducer from '../features/authSlice';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';


export interface RootState {
  cart: ReturnType<typeof cartReducer>;
  product: ReturnType<typeof productReducer>;
  auth: ReturnType<typeof authReducer>; 
  [apiSlice.reducerPath]: ReturnType<typeof apiSlice.reducer>;
}


const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['apiProductSlice'], 
};

const rootReducers = combineReducers({
  cart: cartReducer,
  product: productReducer,
  auth: authReducer,
  [apiSlice.reducerPath]: apiSlice.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducers);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(apiSlice.middleware),
});


const persistor = persistStore(store);

setupListeners(store.dispatch);

export type AppThunk = ThunkAction<void, RootState, null, Action<string>>;

export { store, persistor };
