import { createStore, combineReducers } from '@reduxjs/toolkit';
import { myItems } from './myItems/slice';
import { myFilter } from './filter/slice';

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['items'],
};

const rootReducer = combineReducers({
  items: myItems.reducer,
  filter: myFilter.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer);
export const persistor = persistStore(store);
