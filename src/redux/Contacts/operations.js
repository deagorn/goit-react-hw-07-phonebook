import axios from "axios";
import { fetchIsDane, isError, isLoading } from "./slice";

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