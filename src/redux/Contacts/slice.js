import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    items: [],
    filter: 'all',
    value: '',
    loading: false,
    error: null,
}

const slice = createSlice({
    name: 'contacts',
    initialState,
    reducers: {
        fetchIsDane: (state, {payload}) => {
            state.items = payload
            state.loading = false
        },
        isLoading: (state, {payload}) => {
            state.loading = true
        },
        isError: (state, {payload}) => {
            state.error = payload
            state.loading = false
        },
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
        selectIsLoading: state => state.loading,
        selectIsError: state => state.error,
    }
})

export const contactsReducer = slice.reducer
export const { removeContact, addContacts, changeFilter, addToFavorite, editContact, changeValue, fetchIsDane, isLoading, isError } = slice.actions;
export const {selectContacts, selectFilter, selectValue, selectIsLoading, selectIsError} = slice.selectors