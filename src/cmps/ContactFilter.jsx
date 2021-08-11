import { Component } from 'react'
import { useForm } from '../hooks/useForm'

export const ContactFilter = ({ onChangeFilter }) => {
  const [filterBy, handleChange] = useForm(
    {
      term: '',
    },
    onChangeFilter
  )

  return (
    <form>
      <label htmlFor='term'>Search by name/phone number</label>
      <input
        type='text'
        name='term'
        value={filterBy.type}
        onChange={handleChange}
      />
    </form>
  )
}
