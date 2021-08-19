import axios from "axios";

export const loadQuiz = (category, difficulty) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(
        `https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${difficulty}&type=multiple`
      );

      const target = [];
      let i = 0;
      while (i < 10) {
        target.push({
          question: scrubStr(data.results[i].question),
          correctAnswer: scrubStr(data.results[i].correct_answer),
          incorrectAnswers: data.results[i].incorrect_answers.map(el => scrubStr(el)),
        });
        i++;
      }
      dispatch({
        type: "LOAD_QUIZ",
        payload: target,
      });
    } catch (err) {
      console.warn(err.message);
      dispatch({
        type: "SET_ERROR",
        payload: err.message,
      });
    }
  };
};



export const addUsername = (username) => ({
  type: "ADD_USERNAME",
  payload: username,
});

export const addUserNum = (userNum) => ({
  type: "ADD_USER_NUM",
  payload: userNum,
});

export const updateDifficulty = (difficulty) => ({
  type: "ADD_DIFFICULTY",
  payload: difficulty,
});

export const submitAnswer = (submittedAnswer) => ({
  type: "ANSWER_SUBMIT",
  payload: submittedAnswer,
});

export const resetState = () => ({
  type: "RESET",
  payload: [0, " ", 0]
});

// Helper scrubber function
export const scrubStr = (str) => {
  const cleanStr = str
    .replaceAll("&quot;", "'")
    .replaceAll("&#039;", "'")
    .replaceAll("&eacute;", "e")
    .replaceAll("&amp; ", " & ");
  return cleanStr;
};

//Helper Shuffle function:
export const shuffle = (arr) => {
  let c = arr.length;
  let rand;
  while (c !== 0) {
    rand = Math.floor(Math.random() * c);
    c--;
    [arr[c], arr[rand]] = [arr[rand], arr[c]];
  }
  return arr;
};
