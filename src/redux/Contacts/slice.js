import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    items: [{ id: '1', name: 'Valik', number: 115515155, favorite: false, author:"user" },
    { id: '2', name: 'Olya', number: 5646546546, favorite: true, author:"user" }],
    filter: 'all',
    value: '',
}

const slice = createSlice({
    name: 'contacts',
    initialState,
    reducers: {
        removeContact: (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload)
        },
        addContacts: (state, action) => {
            state.items.push(action.payload)
        },
        changeFilter: (state, action) => {
            state.filter = action.payload
        },
        addToFavorite: (state, action) => {
            const item = state.items.find(item => item.id === action.payload)
            item.favorite = !item.favorite
        },
        editContact: (state, action) => {
            state.items = state.items.map(item => item.id === action.payload.id ? { ...action.payload } : item)
        },
        changeValue: (state, action) => {
            state.value = action.payload
        }
    },
    selectors: {
        selectContacts: state => state.items,
        selectFilter: state => state.filter,
        selectValue: state => state.value,
    }
})

export const contactsReducer = slice.reducer
export const {removeContact, addContacts, changeFilter, addToFavorite, editContact, changeValue} = slice.actions
export const {selectContacts, selectFilter, selectValue} = slice.selectors