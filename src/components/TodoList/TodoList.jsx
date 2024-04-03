import { ContactForm } from 'components/ContactForm/ContactForm'
import { ContactList } from 'components/ContactList/ContactList'
import Filter from 'components/Filter/Filter'
import { UserForm } from 'components/UserForm/UserForm'

import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectUser } from '../../redux/userSlice'
import { fetchData } from '../../redux/Contacts/operations'
import { selectIsError, selectIsLoading } from '../../redux/Contacts/slice'


export const TodoList = () => {
	const user = useSelector(selectUser)
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(fetchData())
	}, [dispatch]);

	const error = useSelector(selectIsError)
	const loading = useSelector(selectIsLoading)
	return (
		<section>
			<UserForm />
			{user && <h2>Current user: {user}</h2>}
			<ContactForm />
			<Filter />
			{loading && <h1>Loading...</h1>}
			{!error ? <ContactList /> : <h1>Ops!</h1>}
		</section>
	)
}