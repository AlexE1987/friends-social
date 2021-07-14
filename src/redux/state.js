const state = {
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
  profilePage: {
    posts: [
      { id: 1, message: 'Hi', likeCounts: 1 },
      { id: 2, message: 'Bye', likeCounts: 22 },
      { id: 3, message: 'Yes', likeCounts: 12 },
      { id: 4, message: 'Ok', likeCounts: 133 },
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

export let addPost = (postMessage) => {
  debugger;
  let newPost = { id: 0, message: postMessage, likeCounts: 21 };
  state.profilePage.posts.push(newPost);
};

export default state;
