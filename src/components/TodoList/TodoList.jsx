import { ContactForm } from 'components/ContactForm/ContactForm'
import { ContactList } from 'components/ContactList/ContactList'
import Filter from 'components/Filter/Filter'
import { UserForm } from 'components/UserForm/UserForm'

import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from '../../redux/userSlice'


export const TodoList = () => {
	const user = useSelector(selectUser)
	return (
		<section>
			<UserForm />
			{user && <h2>Current user: {user}</h2>}
			<ContactForm />
			<Filter />
			<ContactList />
		</section>
	)
}