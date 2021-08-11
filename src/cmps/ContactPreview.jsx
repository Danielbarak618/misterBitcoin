import React from 'react'
import { Link } from 'react-router-dom'

export function ContactPreview({ contact, deleteContact }) {
  return (
    <li className='contact-preview'>
      <span>{contact.name}</span>
      <Link to={`/contacts/${contact._id}`}>
        <img src={'https://robohash.org/' + contact._id} alt='' />
      </Link>
      <section className='actions'></section>
    </li>
  )
}
