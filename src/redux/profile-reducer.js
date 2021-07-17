const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
let initialState = {
  posts: [
    { id: 1, message: 'Hi', likeCounts: 1 },
    { id: 2, message: 'Bye', likeCounts: 22 },
    { id: 3, message: 'Yes', likeCounts: 12 },
    { id: 4, message: 'Ok', likeCounts: 133 },
  ],
  newPostText: 'my text',
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = { id: 0, message: state.newPostText, likeCounts: 21 };
      state.posts.push(newPost);
      state.newPostText = '';
      return state;
    case UPDATE_NEW_POST_TEXT:
      state.newPostText = action.newText;
      return state;
    default:
      return state;
  }
};

export const addActionCreatorPost = () => ({ type: ADD_POST });

export const updateNewPostTextActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
});

export default profileReducer;
