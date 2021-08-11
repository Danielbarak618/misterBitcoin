import { Link, useHistory, useParams } from 'react-router-dom'
import { contactService } from '../services/contact-service.js'
import deleteIcon from '../assets/imgs/delete.png'
import backIcon from '../assets/imgs/back.png'
import editIcon from '../assets/imgs/edit.png'
import { removeContact, getContactById } from '../store/actions/contactActions'
import { useDispatch } from 'react-redux'
import { TransferFund } from '../cmps/TransferFund.jsx'
import { useState } from 'react'
import { useEffect } from 'react'

export const ContactDetails = () => {
  const [contact, setContact] = useState({})
  const dispatch = useDispatch()
  const history = useHistory()

  const { contactId } = useParams()
  useEffect(() => {
    const loadContact = async () => {
      try {
        const contact = await contactService.getContactById(contactId)
        setContact(contact)
      } catch (err) {
        console.log(err)
      }
    }
    loadContact()
  }, [contactId])

  const deleteContact = async () => {
    await dispatch(removeContact(contact._id))
    history.push('/contacts')
  }

  // const {contact } = this.state
  if (!contact) return <div>load</div>
  const { name, email, phone, _id } = contact
  return (
    <section>
      <div className='details-actions'>
        <Link to='/contacts'>
          <img className='details-icon' src={backIcon} alt='back-icon' />
        </Link>
        <Link to={'/contacts/edit/' + _id}>
          <img className='details-icon' src={editIcon} alt='edit-icon' />
        </Link>
      </div>
      <div className='details'>
        <img src={'https://robohash.org/' + _id} alt='' />
        <p>Name:{name}</p>
        <p>Email:{email}</p>
        <p>Phone:{phone}</p>
        <TransferFund contact={contact} />
        <button onClick={deleteContact}>
          <img src={deleteIcon} alt='trash-icon' />
        </button>
      </div>
    </section>
  )
}
