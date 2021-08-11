import { useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { ContactFilter } from '../cmps/ContactFilter.jsx'

import { ContactList } from '../cmps/ContactList.jsx'
import { loadContacts, setFilterBy } from '../store/actions/contactActions'

export const ContactApp = () => {
  const { contacts } = useSelector((state) => state.contactsModule)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadContacts())
    //eslint-disable-next-line
  }, [])

  const onChangeFilter = useCallback((filterBy) => {
    dispatch(setFilterBy(filterBy))
    dispatch(loadContacts())
    //eslint-disable-next-line
  }, [])

  return (
    <div>
      <ContactFilter onChangeFilter={onChangeFilter} />
      <ContactList contacts={contacts} />
      <Link to='contacts/edit'>Add Contact</Link>
    </div>
  )
}
