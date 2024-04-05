import s from "../ContactForm/ContactForm.module.css"

import React from 'react'
import { useForm } from "react-hook-form"
import { useDispatch } from "react-redux"
import { editContactThunk } from "../../redux/Contacts/operations"
// import { editContact } from "../../redux/Contacts/slice"
// import { editContact } from "../../redux/Contacts/action"

export const EditForm = ({content, toggle}) => {

    const { register, handleSubmit, reset } = useForm({
        defaultValues: {
            name: content.name,
            phone:content.phone,
        }
    })
  const dispatch = useDispatch()
  
	const submit = data => {
		// const newContact = { name, phone, id: nanoid(), favorite: false }
        dispatch(editContactThunk({ ...content, ...data }))
        toggle()
		reset()
  }

  return (
    <form className={s.formContainer} onSubmit={handleSubmit(submit)}>
      <label className={s.label}>   Name
        <input {...register('name')} type="text" name="name" required className={s.inputField} /> </label>
      <label className={s.label}>  phone
        <input {...register('phone')} type="tel" name="phone"  required className={s.inputField} />
      </label>

      <button className={s.submitButton}>Edit contact</button>
    </form>
  )
}
