const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
let initialState = {
  users: [
    {
      id: 1,
      photoUrl: 'https://i.pinimg.com/originals/1b/fc/02/1bfc0220938a4050c06ad363dc28657f.png',
      followed: true,
      fullName: 'Alex',
      status: 'Winner',
      location: { city: 'Saratov', country: 'Russia' },
    },
    {
      id: 2,
      photoUrl: 'https://i.pinimg.com/originals/1b/fc/02/1bfc0220938a4050c06ad363dc28657f.png',
      followed: false,
      fullName: 'Max',
      status: 'Winner',
      location: { city: 'Minsk', country: 'Belarus' },
    },
    {
      id: 3,
      photoUrl: 'https://i.pinimg.com/originals/1b/fc/02/1bfc0220938a4050c06ad363dc28657f.png',
      followed: true,
      fullName: 'Den',
      status: 'Winner',
      location: { city: 'Kiev', country: 'Ukraine' },
    },
  ],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW: {
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: true };
          }
          return u;
        }),
      };
    }
    case UNFOLLOW: {
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: false };
          }
          return u;
        }),
      };
    }
    case SET_USERS: {
      return { ...state, users: [...state.users, ...action.users] };
    }
    default:
      return state;
  }
};

export const followAC = (userId) => ({ type: FOLLOW, userId });
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId });
export const setUsersAC = (users) => ({ type: SET_USERS, users });

export default usersReducer;
