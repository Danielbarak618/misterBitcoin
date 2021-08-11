import { useState } from 'react'
import bitcoinIcon from '../assets/imgs/bitcoin.png'
import { signup } from '../store/actions/userActions.js'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'

export const Signup = () => {
  const [fields, setFields] = useState({ name: '' })
  const dispatch = useDispatch()
  const history = useHistory()

  const handleChange = ({ target }) => {
    var fields = target.id
    var value = target.type === 'number' ? +target.value : target.value
    setFields({ [fields]: value })
  }

  const onSignup = async () => {
    const { name } = fields
    if (!name) return
    await dispatch(signup(name))
    history.push('/')
  }

  return (
    <section className='signup'>
      <img src={bitcoinIcon} alt='bitcoin' className='icon-lg' />
      <label htmlFor='name'>Please enter your name:</label>
      <input
        type='text'
        value={fields.name}
        id='name'
        onChange={handleChange}
        autoComplete='off'
      />
      <button className='simple-button' onClick={onSignup}>
        Sign Up
      </button>
    </section>
  )
}
