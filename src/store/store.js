import { combineReducers, configureStore } from '@reduxjs/toolkit'
import mainReducer from 'modules/main/store/mainSlice'
import leadersReducer from 'modules/main/store/leadersSlice'

import storage from 'redux-persist/lib/storage'
import { persistReducer, persistStore } from 'redux-persist'
import thunk from 'redux-thunk'

const persistConfig = {
  key: 'products',
  storage,
}

const rootReducer = combineReducers({
  mainReducer,
  leadersReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
})

export const persistor = persistStore(store)

window.store = store
