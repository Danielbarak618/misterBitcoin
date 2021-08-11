import { storageService } from './async-storage.service'
import {utilService} from './utilService.js'

export const userService = {
	getUser,
	getUsers,
	signup,
	addMove,
}

const USER_KEY = 'users'

let gUsers = [
	{
		_id: utilService.makeId(),
		name: 'Daniel',
		coins: 100,
		moves: [],
	},
]

async function getUsers() {
	const users = await storageService.query(USER_KEY)
	if (!users || !users.length) {
		await storageService.postMany(USER_KEY, gUsers)
		return Promise.resolve(gUsers)
	}
	return users
}

function getUser() {
	return gUsers[0]
}

async function signup(name) {
	const user = {
		_id: utilService.makeId(),
		name,
		coins: 100,
		moves: [],
	}
	localStorage.clear()
	return await storageService.post(USER_KEY, user)
}

async function addMove(contact, amount) {
	const move = {
		toId: contact._id,
		to: contact.name,
		at: Date.now(),
		amount,
	}
	
	const users = await getUsers()
	const user = users[0]
	user.moves.unshift(move)
	localStorage.clear()
	await storageService.post(USER_KEY,user)
	return Promise.resolve(move)
}

