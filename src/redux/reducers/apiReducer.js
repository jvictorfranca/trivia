const INNITIAL_STATE = {
  trivias: [],
};

function apiReducer(state = INNITIAL_STATE, action) {
  switch (action.type) {
  case 'ADD_TRIVIA':
    return [...state.trivias, ...action.payload];
  default:
    return state;
  }
}

export default apiReducer;
