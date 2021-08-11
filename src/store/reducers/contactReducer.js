const INITIAL_STATE = {
    contacts : [],
    currContact:null,
    filterBy:null
}

export function contactReducer(state=INITIAL_STATE,action){
    switch(action.type){
        case 'SET_CONTACTS':
            return {
                ...state,
                contacts:action.contacts
            }
        case 'SET_CONTACT':
            return {
                ...state,
                currContact:action.contact
            }    
        case 'SET_FILTER_BY':
            return{
                ...state,
                filterBy:action.filterBy
            }   
        case 'REMOVE_CONTACT':
            return{
                ...state,
                contacts : state.contacts.filter(contact => contact._id !== action.contactId)
            }  
        case 'ADD_CONTACT':
            return {
                ...state,
                robots : [...state.contacts , action.contact]
            }      
        case 'UPDATE_CONTACT':
            const currContact = state.currContact._id === action.contact._id ? action.contact : state.currContact
            return {
                ...state,
                contacts : state.contacts && state.contacts.map(contact => contact._id === action.contact._id ? action.contact:contact),currContact
            }
    
    default:
        return state
}
}


