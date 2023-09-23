
export const initialState = {
    user: null,
    // token: 'BQDfN0waUJXUFhn0r8S-qNY1Z5b7JCaNc3ZTqSZyOdSLa2SxqBv1r1MPvuqSWxmrtiUuR88WVcd7n-SvaYt1YR69wEnhLhhIgilX0F0tBFDSivtBlCJVvOWXHSA9BxS4Yslz9eOzL9ftF-S1YK7jTAUwbD3MOjKnXxH_tH_Frqwt1BfQ-EK12m1hkK3I6ECmh2TUtAnAiPyAWrUtse9f',
    song: [],
    playing: false,
    item: null
}

const reducer = (state, action) => {
  console.log(action)

  switch(action.type){
    case 'SET_USER':
        return {
            ...state,
            user: action.user
        }

    case 'SET_TOKEN':
      return {
          ...state,
          token: action.token
      }

    case 'SET_PLAYLISTS':
      return {
        ...state,
        playlists: action.playlists,
      }

    case 'SET_DISCOVER_WEEKLY':
      return{
        ...state,
        discover_weekly: action.discover_weekly,
      }  
    default:
      return state;
  }
}

export default reducer;