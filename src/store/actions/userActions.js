import { userService } from '../../services/user-service.js'

export function transferMoney(contact,amount) {
	
	return async (dispatch, getState) => {
		const { loggedInUser } = getState().userModule
		if (loggedInUser.coins < amount) {
			alert('You dont have enough money!')
			return
		}
		const move =  await userService.addMove(contact,amount)
		console.log(move,'moveeee');
		console.log(loggedInUser);
		dispatch({ type: 'TRANSFER_MONEY', amount , move})
	}
}

export function signup(name) {
	return async dispatch => {
		try {
			const user = await userService.signup(name)
			dispatch({ type: 'SIGNUP', user })
		} catch (err) {
			console.log(err)
			throw err
		}
	}
}
