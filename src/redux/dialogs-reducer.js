const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
	dialogs: [
		{id: 1, name: 'Alex'},
		{id: 2, name: 'Alice'},
		{id: 3, name: 'Petr'},
		{id: 4, name: 'Fomasa'},
	],
	messages: [
		{id: 1, message: 'Hi'},
		{id: 2, message: 'Bye'},
		{id: 3, message: 'Yes'},
		{id: 4, message: 'Ok'},
	],
};

const dialogsReducer = (state = initialState, action) => {
	switch (action.type) {
		case SEND_MESSAGE: {
			let body = action.newMessageText;
			return {
				...state,
				messages: [...state.messages, {id: 6, message: body}],
			};
		}
		default:
			return state;
	}
};

export const sendMessageCreator = (newMessageText) => ({type: SEND_MESSAGE, newMessageText});

export default dialogsReducer;
