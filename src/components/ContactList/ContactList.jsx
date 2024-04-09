import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { ContactItem } from "./ContactItem"
// import { selectContacts, selectFilter, selectValue } from "../../redux/Contacts/selectors"
import { useModal } from "hooks/useModal"
import { EditForm } from "components/EditForm/EditForm"
import Modal from "components/Modal/Modal"
import s from "./ContactList.module.css"
// import { selectContacts, selectFilter, selectValue } from '../../redux/Contacts/slice'
import { addToFavariteThunk } from '../../redux/Contacts/operations'
import { selectFilterData } from '../../redux/Contacts/selectors'


export const ContactList = () => {
    const contacts = useSelector(selectFilterData);
    // const filter = useSelector(selectFilter);
    // const value = useSelector(selectValue);

    // const filteredItems = contacts;

    const { isOpen, toggle } = useModal()
    const [content, setContent] = useState('');

    const dispatch = useDispatch()

    

    // const filteredData = () =>  {
    //     switch (filter) {
    //         case 'all':
    //             return contacts.filter(contact =>
    //                 contact.name.toLowerCase().includes(value.toLowerCase())
    //             );
            
    //         case 'favorites':
    //             return contacts.filter(contact =>
    //                 contact.name.toLowerCase().includes(value.toLowerCase()) && contact.favorite)
            
    //         default:
    //             return filteredItems;
    //     }
    // }

    const handleEditItem = (content) => {
        toggle();
        setContent(content)
    }

    const addToFavarite = (content) => {
        setContent(content);
        // console.log(content)
        dispatch(addToFavariteThunk(content))

    }

    return (
        <ul className={s.listContainer}>
            {contacts.map(contact =>
                <ContactItem handleEditItem={() => handleEditItem(contact)} addToFavarite={() => addToFavarite(contact)} key={contact.id} {...contact} />)}
            {isOpen && <Modal closeModal={toggle}>
                <EditForm content={content} toggle={toggle}/>
            </Modal>}
        </ul>
    )
}

