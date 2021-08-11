import React, { Component } from 'react'
import { connect } from 'react-redux'
import { contactService } from '../services/contact-service'
import {getContactById , saveContact} from '../store/actions/contactActions'


class _ContactEdit extends Component {
   state = {
       contact:null,
   }
    async componentDidMount(){
        const contact = await this.loadContact()
        this.setState({contact})
    }

    loadContact = async () => {
        const {contactId} = this.props.match.params
        if(contactId) {
            await this.props.getContactById(contactId);
            return this.props.contact;
        }
        return contactService.getEmptyContact()
        
    }


    onSaveContact = async (ev) => {
        ev.preventDefault()
        const {contact} = this.state
        await this.props.saveContact(contact)
        this.props.history.push('/contacts')
    }

    handleChange = ({ target }) => {
        const field = target.name
        const value = target.type === "number" ? +target.value : target.value
        this.setState(prevState => ({ contact: { ...prevState.contact, [field]: value } }))
    }

    render() {
        if(!this.state.contact) return <div>Loading...</div>
        const {name , email , phone} = this.state.contact
        return (
            <form className="contact-edit simple-form">
                <label htmlFor="name">Name</label>
                <input value={name} name="name" type="text" id="name" onChange={this.handleChange}/>

                <label htmlFor="email">Email</label>
                <input value={email} name="email" type="text" id="email" onChange={this.handleChange}/>
                
                <label htmlFor="phone">Phone number</label>
                <input value={phone} name="phone" type="text" id="phone" onChange={this.handleChange}/>

                <button onClick={this.onSaveContact}>Save</button>
            </form>
                
            
        )
    }
}

const mapStateToProps = state => {
    return {
      contact:state.contactsModule.currContact
    }
  }
  
  const mapDispatchToProps = {
    saveContact,
    getContactById
  }
  
  // Connects the store with the component, injects it to the props
  export const ContactEdit = connect(mapStateToProps, mapDispatchToProps)(_ContactEdit)