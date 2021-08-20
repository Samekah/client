const initState = {
  loading: false,
  questionIndex: 0,
  username: "",
  category: "",
  difficulty: "",
  result: [{ question: "", correctAnswer: "", incorrectAnswers: [] }],
  score: 0,
  userNum: 0,
};

const questionReducer = (state = initState, action) => {
  switch (action.type) {
    case "LOAD_QUIZ":
      return { ...state, result: action.payload, error: false };
    case "ADD_USERNAME":
      return { ...state, username: action.payload, error: false };
    case "ADD_DIFFICULTY":
      return { ...state, difficulty: action.payload, error: false };
    case "ADD_USER_NUM":
      return { ...state, userNum: action.payload, error: false };
    case "ANSWER_SUBMIT":
      if (action.payload === state.result[state.questionIndex].correctAnswer) {
        return { ...state, score: state.score + 1, questionIndex: state.questionIndex + 1 };
      }
      return { ...state, questionIndex: state.questionIndex + 1 };
    case "RESET":
      return {
        ...state,
        questionIndex: action.payload[0],
        username: action.payload[1],
        score: action.payload[2],
        error: false,
      };
    case "SET_ERROR":
      return { ...state, error: action.payload };

    default:
      return state;
  }
};

export default questionReducer;
