// actions.js
export const submitAnswer = (answer) => ({
  type: 'SUBMIT_ANSWER',
  payload: answer,
});

export const resetQuiz = () => ({
  type: 'RESET_QUIZ',
});
