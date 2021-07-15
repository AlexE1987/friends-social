let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: 'Hi', likeCounts: 1 },
        { id: 2, message: 'Bye', likeCounts: 22 },
        { id: 3, message: 'Yes', likeCounts: 12 },
        { id: 4, message: 'Ok', likeCounts: 133 },
      ],
      newPostText: 'my text',
    },

    dialogsPage: {
      dialogs: [
        { id: 1, name: 'Alex' },
        { id: 2, name: 'Alice' },
        { id: 3, name: 'Petr' },
        { id: 4, name: 'Foma' },
      ],
      messages: [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'Bye' },
        { id: 3, message: 'Yes' },
        { id: 4, message: 'Ok' },
      ],
    },

    sidebar: {
      friends: [
        { id: 1, name: 'Alex' },
        { id: 2, name: 'Alice' },
        { id: 3, name: 'Petr' },
        { id: 4, name: 'Foma' },
      ],
    },
  },
  getState() {
    return this._state;
  },

  _callSubscriber() {
    console.log('state changed');
  },

  addPost() {
    let newPost = { id: 0, message: this._state.profilePage.newPostText, likeCounts: 21 };
    this._state.profilePage.posts.push(newPost);
    this._state.profilePage.newPostText = '';
    this._callSubscriber(this._state);
  },

  updateNewPostText(newText) {
    debugger;
    this._state.profilePage.newPostText = newText;
    this._callSubscriber(this._state);
  },

  subscribe(observer) {
    this._callSubscriber = observer;
  },
};

window.store = store;

export default store;
