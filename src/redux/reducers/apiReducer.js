const INNITIAL_STATE = {
  trivias: {
    current: 0,
  },
  userData: {
    name: '',
    email: '',
    score: 0,
    correctQuestionCounter: 0,
  },
};

function apiReducer(state = INNITIAL_STATE, action) {
  switch (action.type) {
  case 'ADD_TRIVIA':
    return {
      ...state,
      trivias: { ...state.trivias, ...action.payload },
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

  case 'ADD_CORRECT_QUESTION_COUNTER':
    return {
      ...state,
      userData: {
        ...state.userData,
        correctQuestionCounter: state.userData.correctQuestionCounter + 1,
      },
    };

  case 'ADD_CURRENT':
    return {
      ...state,
      trivias: {
        current: state.trivias.current + 1,
      },
    };

  default:
    return state;
  }
}

export default apiReducer;
