import { createReducer } from "@reduxjs/toolkit";
import { addContacts, addToFavorite, changeFilter, changeValue, editContact, removeContact } from "./action";
// import { ADD_CONTACT, ADD_TO_FAVORITE, CHANGE_FILTER, CHANGE_VALUE, EDIT_CONTACT, REMOVE_CONTACT } from "./constants"


const initialState = {
    items: [{ id: '1', name: 'Valik', number: 115515155, favorite: false },
    { id: '2', name: 'Olya', number: 5646546546, favorite: true }],
    filter: 'all',
    value: '',
}

export const contactsReducer = createReducer(initialState, builder => {
    builder.addCase(removeContact, (state, action) => {
        state.items = state.items.filter(item => item.id !== action.payload)
    }).addCase(addContacts, (state, action) => {
        state.items.push(action.payload) 
    }).addCase(changeFilter, (state, action) => {
        state.filter = action.payload
    }).addCase(addToFavorite, (state, action) => {
        const item = state.items.find(item => item.id === action.payload)
        item.favorite = !item.favorite
    }).addCase(editContact, (state, action) => {
        state.items = state.items.map(item => item.id === action.payload.id ? { ...action.payload } : item)
    }).addCase(changeValue, (state, action) => {
        state.value = action.payload 
    })

})

// export const contactsReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case removeContact.type:
//             return {
//                 ...state,
//                 items: state.items.filter(item => item.id !== action.payload),
//             }
//         case addContacts.type:
//             return {
//                 ...state,
//                 items: [...state.items, action.payload],
//             }
//         case changeFilter.type:
//             return {
//                 ...state,
//                 filter: action.payload,
//             }
//         case addToFavorite.type:
//             return {
//                 ...state,
//                 items: state.items.map(item => (item.id === action.payload ? { ...item, favorite: !item.favorite } : item)),
//             }
//         case editContact.type:
//             return {
//                 ...state,
//                 items: state.items.map(item =>
//                     item.id === action.payload.id ? { ...action.payload } : item),
//             }
        
//         case changeValue.type:
// 			return {
// 				...state,
//                 value: action.payload,
// 			}
//         default:
//             return state;
//     };
// };