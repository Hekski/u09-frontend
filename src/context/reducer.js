import { reducerCases } from './constants';

export const initialState = {
   code: null,
   user: {},
   auth: {},
   users: [{}],
   isAuthenticated: false,
   /*
  isAuthenticated: localStorage.getItem('token') ? true : false, // or just !!localStorage.getItem('token')
  isLoading: false,
  isRegistered: false, */
};

const reducer = (state, action) => {
   switch (action.type) {
      case reducerCases.SET_CODE: {
         return {
            ...state,
            code: action.code,
         };
      }
      case reducerCases.SET_USER:
         return {
            ...state,
            user: action.user,
         };
      case reducerCases.SET_AUTH:
         return {
            ...state,
            userInfo: action.isAuthenticated,
         };
      case reducerCases.SET_PLAYINGTRACK:
         return {
            ...state,
            userInfo: action.currentSong,
         };
      default:
         return state;
   }
};

export default reducer;
