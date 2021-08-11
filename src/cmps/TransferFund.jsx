import  { Component } from 'react'
import { connect } from 'react-redux'
import {transferMoney} from '../store/actions/userActions'

class _TransferFund extends Component {
    state = {
        amount:0
    }
    componentDidMount() {
        
    }

    onTransferMoney = async () => {
        const {amount} = this.state
        const {contact} = this.props
        if(!amount) return
        await this.props.transferMoney(contact,amount)
    }

    handleChange = ({ target }) => {
		var field = target.id
		var value = target.type === 'number' ? +target.value : target.value
		this.setState({ [field]: value })
	}
    
    render() {
        const {contact} = this.props
        const {amount} = this.state
        return (
            <div>
                <h2>Transfer coins to {contact.name}</h2>
                <label>
                    <input type="text" id="amount" value={amount} onChange={this.handleChange}/>
                </label>
                <button onClick={this.onTransferMoney}>Transfer</button>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        loggedInUser:state.loggedInUser
    }
}

const mapDispatchToProps = {
    transferMoney,
  }



export const TransferFund = connect(mapStateToProps,mapDispatchToProps)(_TransferFund)