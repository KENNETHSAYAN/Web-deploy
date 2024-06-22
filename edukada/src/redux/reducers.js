const initialState = {
  questions: [
    {
      question: 'What is the value of π (pi)?',
      options: ['3.14', '3.1415', '3.14159', '3.142'],
      answer: '3.14159'
    },
    {
      question: 'What is the square root of 144?',
      options: ['10', '12', '14', '16'],
      answer: '12'
    },
    {
      question: 'What is the chemical symbol for water?',
      options: ['H2O', 'CO2', 'NaCl', 'O2'],
      answer: 'H2O'
    },
    {
      question: 'What is the largest planet in our solar system?',
      options: ['Earth', 'Jupiter', 'Saturn', 'Mars'],
      answer: 'Jupiter'
    },
    {
      question: 'Who was the first President of the United States?',
      options: ['Abraham Lincoln', 'Thomas Jefferson', 'George Washington', 'John Adams'],
      answer: 'George Washington'
    },
    {
      question: 'In which year did World War II end?',
      options: ['1945', '1939', '1918', '1950'],
      answer: '1945'
    },
    {
      question: 'Who wrote "Romeo and Juliet"?',
      options: ['William Shakespeare', 'Jane Austen', 'Charles Dickens', 'Mark Twain'],
      answer: 'William Shakespeare'
    },
    {
      question: 'What is the plural of "child"?',
      options: ['childs', 'children', 'childes', 'childer'],
      answer: 'children'
    }
  ],
  userAnswers: []
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SUBMIT_ANSWER':
      return {
        ...state,
        userAnswers: [
          ...state.userAnswers,
          action.payload
        ]
      };
    case 'RESET_QUIZ':
      return {
        ...state,
        userAnswers: []
      };
    default:
      return state;
  }
};

export default rootReducer;
