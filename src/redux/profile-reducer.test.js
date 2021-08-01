import profileReducer, {addPostActionCreator, deletePost} from "./profile-reducer";

let state = {
	posts: [
		{id: 1, message: 'Hi', likeCounts: 1},
		{id: 2, message: 'Bye', likeCounts: 22},
		{id: 3, message: 'Yes', likeCounts: 12},
		{id: 4, message: 'Ok', likeCounts: 133},
	],
};


it('Length of posts should be incremented', () => {
	let action = addPostActionCreator('it-kamasutra.com');

	let newState = profileReducer(state, action);
	expect(newState.posts.length).toBe(5);
});

it('Message of new post should be correct', () => {
	let action = addPostActionCreator('it-kamasutra.com');

	let newState = profileReducer(state, action);
	expect(newState.posts[4].message).toBe('it-kamasutra.com');
});

it('after deleting length of messages should be decrementing', () => {
	let action = deletePost(1);

	let newState = profileReducer(state, action);
	expect(newState.posts.length).toBe(3);
});

it(`after deleting length shouldn't be decrement if id is incorrect`, () => {
	let action = deletePost(1000);

	let newState = profileReducer(state, action);
	expect(newState.posts.length).toBe(4);
});