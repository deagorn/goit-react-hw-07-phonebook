import { createAction } from "@reduxjs/toolkit";
export const removeContact = createAction('removeContact')
export const addContacts = createAction('addContacts')
export const changeFilter = createAction('changeFilter')
export const addToFavorite = createAction('addToFavorite')
export const editContact = createAction('editContact')
export const changeValue = createAction('changeValue')

// import { ADD_CONTACT, ADD_TO_FAVORITE, CHANGE_FILTER, CHANGE_VALUE, EDIT_CONTACT, REMOVE_CONTACT } from "./constants";

// export const removeContact = (id) => ({ type: REMOVE_CONTACT, payload: id })
// export const addContacts = (item) => ({ type: ADD_CONTACT, payload: item })
// export const changeFilter = (filtre) =>  ({type:CHANGE_FILTER, payload:filtre})
// export const addToFavorite = (id) => ({ type: ADD_TO_FAVORITE, payload: id })
// export const editContact = (contact) => ({ type: EDIT_CONTACT, payload: contact })
// export const changeValue = (value) => ({
// 	type: CHANGE_VALUE,
// 	payload: value,
// })



