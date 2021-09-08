const INNITIAL_STATE = {
  trivias: {
    current: 0,
  },
  player: {
    name: '',
    assertions: '',
    score: 0,
    gravatarEmail: '',
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
      player: {
        ...state.player,
        name: action.payload.name,
        gravatarEmail: action.payload.email,
      },
    };

  case 'ADD_SCORE':
    return {
      ...state,
      player: {
        ...state.player,
        score: state.player.score + action.payload,
      },
    };
  default:
    return state;
  }
}

export default apiReducer;
