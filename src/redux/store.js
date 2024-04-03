import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "./Contacts/slice";
import { userReduser } from "./userSlice";

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
}

const persistedReducer = persistReducer(persistConfig, contactsReducer)


export const store = configureStore({
	reducer: {
		contacts: persistedReducer,
		user: userReduser
	},

	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}),
})

export let persistor = persistStore(store)


//  Старий тулкіт

// import { configureStore } from "@reduxjs/toolkit";
// import { contactsReducer } from "./Contacts/reducer";

// export const store = configureStore({
// 	reducer:{contacts: contactsReducer}
// })


// Звичайний редакс

// import { combineReducers, createStore } from 'redux'
// import { devToolsEnhancer } from '@redux-devtools/extension'
// import { contactsReducer } from './Contacts/reducer'


// const enhancer = devToolsEnhancer()

// const rootReducer = combineReducers({
// 	contacts: contactsReducer,
// })

// export const store = createStore(rootReducer, enhancer)