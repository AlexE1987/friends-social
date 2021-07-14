let rerenderEntireTree = () => {
  console.log('state changed');
};

let state = {
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
};

window.state = state;
export const addPost = () => {
  let newPost = { id: 0, message: state.profilePage.newPostText, likeCounts: 21 };
  state.profilePage.posts.push(newPost);
  state.profilePage.newPostText = '';
  rerenderEntireTree(state);
};

export const updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText;
  rerenderEntireTree(state);
};

export const subscribe = (observer) => {
  rerenderEntireTree = observer;
};

export default state;
