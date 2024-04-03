import axios from "axios";
import { addContacts, fetchIsDane, isError, isLoading, removeContact } from "./slice";

axios.defaults.baseURL = 'https://660ca50d3a0766e85dbe6ab6.mockapi.io/'
// contacts

export const fetchData = () => async (dispatch) => {
try {
    dispatch(isLoading())
    const { data } = await axios.get('contacts')
    console.log(data)
    dispatch(fetchIsDane(data))

} catch (error) {
    dispatch(isError(error.message))
}
}

export const deleteContact = (id) => async (dispatch) => {
    try {
        await axios.delete(`contacts/${id}`)
        dispatch(removeContact(id))
    } catch (error) {
    dispatch(isError(error.message))
    }
}

export const addContact = body => async (dispatch) => {
    try {
        const headers = {
            'Content-Type': 'application/json'
        };

        const response = await axios.post('contacts', body, { headers });
        dispatch(addContacts(response.data));
    } catch (error) {
        dispatch(isError(error.message));
    }
};