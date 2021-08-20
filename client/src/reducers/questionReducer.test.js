import questionReducer from "./questionReducer";

describe("question reducer", () => {
  test("it intialises with loading of false", () => {
    const initReturn = questionReducer(undefined, { type: "@@INIT" });
    expect(initReturn).toEqual({
      loading: false,
      questionIndex: 0,
      username: "",
      category: "",
      difficulty: "",
      result: [{ question: "", correctAnswer: "", incorrectAnswers: [] }],
      score: 0,
      userNum: 0,
    });
  });

  test("it returns with updated username when submitted", () => {
    const fakeLoad = questionReducer({ username: "" }, { type: "ADD_USERNAME", payload: "Polina" });
    expect(fakeLoad).toMatchObject({ username: "Polina" });
  });

  test("it returns with updated difficulty when submitted", () => {
    const fakeLoad = questionReducer({ difficulty: "" }, { type: "ADD_DIFFICULTY", payload: "easy" });
    expect(fakeLoad).toMatchObject({ difficulty: "easy" });
  });
  test("it returns with updated userNum when submitted", () => {
    const fakeLoad = questionReducer({ userNum: 0 }, { type: "ADD_USER_NUM", payload: 5 });
    expect(fakeLoad).toMatchObject({ userNum: 5 });
  });

  test("it returns with socre +1 when answer is correct ", () => {
    const fakeLike = questionReducer(
      {
        result: [{ question: "", correctAnswer: "", incorrectAnswers: [] }],
      },
      {
        type: "LOAD_QUIZ",
        payload: [
          { question: "What is my name?", correctAnswer: "Humza", incorrectAnswers: ["Shav", "Polina", "Sammie"] },
        ],
      }
    );
    expect(fakeLike).toMatchObject({
      result: [
        { question: "What is my name?", correctAnswer: "Humza", incorrectAnswers: ["Shav", "Polina", "Sammie"] },
      ],
    });
  });

  test("it returns with score +1 when answer is correct ", () => {
    const fakeLike = questionReducer(
      {
        questionIndex: 0,
        score: 0,
        result: [
          { question: "What is my name?", correctAnswer: "Humza", incorrectAnswers: ["Shav", "Polina", "Sammie"] },
        ],
      },
      {
        type: "ANSWER_SUBMIT",
        payload: "Humza",
      }
    );
    expect(fakeLike).toMatchObject({
      questionIndex: 1,
      score: 1,
    });
  });

  test("it returns with socre +1 when answer is correct ", () => {
    const fakeLike = questionReducer(
      {
        questionIndex: 0,
        score: 0,
        result: [
          { question: "What is my name?", correctAnswer: "Humza", incorrectAnswers: ["Shav", "Polina", "Sammie"] },
        ],
      },
      {
        type: "ANSWER_SUBMIT",
        payload: "Shav",
      }
    );
    expect(fakeLike).toMatchObject({
      questionIndex: 1,
      score: 0,
    });
  });
});
