import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "./Contacts/slice";
import { userReduser } from "./userSlice";




export const store = configureStore({
	reducer: {
		contacts: contactsReducer,
		user: userReduser
	},
})



