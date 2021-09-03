const INNITIAL_STATE = {
  trivias: [],
  userData: {
    name: '',
    email: '',
    score: 0,
  },
};

function apiReducer(state = INNITIAL_STATE, action) {
  switch (action.type) {
  case 'ADD_TRIVIA':
    return {
      ...state,
      trivias: [...state.trivias, ...action.payload],
    };

  case 'ADD_USERDATA':
    return {
      ...state,
      userData: {
        ...state.userData,
        name: action.payload.name,
        email: action.payload.email,
      },
    };

  case 'ADD_SCORE':
    return {
      ...state,
      userData: {
        ...state.userData,
        score: state.userData.score + action.payload,
      },
    };
  default:
    return state;
  }
}

export default apiReducer;
