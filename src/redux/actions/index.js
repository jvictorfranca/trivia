const addTrivia = (payload) => ({
  type: 'ADD_TRIVIA',
  payload,
});

// Payload deverá ser o objeto do userData, com chame name: e email:
export const addUserData = (payload) => ({
  type: 'ADD_USERDATA',
  payload,
});

export const addScore = (payload) => ({
  type: 'ADD_SCORE',
  payload,
});

export const addCorrectQuestionCounter = () => ({
  type: 'ADD_CORRECT_QUESTION_COUNTER',
});

export const addCurrent = () => ({
  type: 'ADD_CURRENT',
});

export const resetCurrent = () => ({
  type: 'RESET_CURRENT',
});

export default addTrivia;
