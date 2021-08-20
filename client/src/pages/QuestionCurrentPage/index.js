import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux"; // New imports to work with Redux
import "./styleHome.css";
import { scrubStr, shuffle, resetState, submitAnswer } from "../../actions";
import { useHistory } from "react-router";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import axios from "axios";
import Countdown from "react-countdown";

const QuestionCurrentPage = () => {
  const username = useSelector((state) => state.username);
  const difficulty = useSelector((state) => state.difficulty);
  const currentScore = useSelector((state) => state.score);
  const currentQuestionIndex = useSelector((state) => state.questionIndex);
  let results = useSelector((state) => state.result);
  const history = useHistory();
  const dispatch = useDispatch();

  const [key, setKey] = useState(0);
  const [countdownKey, setCountdownKey] = useState(0);

  const submitData = () => {
    console.log("Submit Data is calling");

    const req = {
      name: username,
      score: currentScore,
      difficulty: difficulty,
    };

    axios
      .post("/api/*", req)
      .then((response) => {
        console.log(response);
      })
      .catch(console.warn);
  };

  function goHome() {
    dispatch(resetState());
    history.push("/");
  }

  function goLeaderboard() {
    dispatch(resetState());
    history.push("/Leaderboard");
  }

  const sendAnswer = (e) => {
    let test = e.target.value;
    console.log(test);
    setKey((prevKey) => prevKey + 1);
    setCountdownKey((prevCountdownKey) => prevCountdownKey + 1);
    dispatch(submitAnswer(test));
  };

  if (currentQuestionIndex <= 9) {
    const answers = shuffle([
      ...results[currentQuestionIndex].incorrectAnswers,
      results[currentQuestionIndex].correctAnswer,
    ]);

    return (
      <div
        role='questionPage'
        className='rounded-xl bg-purple-darker  mt-20 w-11/12 h-5/6 m-auto shadow-xl flex flex-col justify-center text-center text-white transform rotate-6'
      >
        <Countdown date={Date.now() + 3000} key={countdownKey} className='transform -rotate-6 text-4xl'>
          <div className='rounded-xl bg-white w-full h-auto m-auto shadow-xl text-black transform -rotate-6'>
            <div className='mt-5 flex flex-row justify-around'>
              <p className=' lg:text-3xl '>Question {currentQuestionIndex + 1} </p>
              <h3 className=' lg:text-3xl'>Score: {currentScore} </h3>
            </div>

            <div className='flex flex-row justify-center '>
              <h1>
                <CountdownCircleTimer
                  onComplete={() => {
                    setCountdownKey((prevCountdownKey) => prevCountdownKey + 1);
                    dispatch(submitAnswer(""));
                    return [true, 100];
                  }}
                  key={key}
                  isPlaying
                  duration={15}
                  colors={[
                    ["#64DFDF", 0.25],
                    ["#48BFE3", 0.25],
                    ["#5E60CE", 0.25],
                    ["#6930C3", 0.25],
                  ]}
                >
                  {({ remainingTime }) => remainingTime}
                </CountdownCircleTimer>
              </h1>
            </div>

            <br></br>
            <div className='flex flex-col justify-around h-auto'>
              <p className='font-semibold font-black lg:text-3xl mx-5'>
                {" "}
                {scrubStr(results[currentQuestionIndex].question)}{" "}
              </p>
              <div className='pb-5 mx-10'>
                {answers.map((t, i) => (
                  <button
                    role='button'
                    name='answerButton'
                    className='border mx-auto mt-5 w-5/6 md:w-2/3 md:text-xl h-auto px-4 py-1 rounded-full bg-purple-darker text-white'
                    onClick={sendAnswer}
                    value={t}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </Countdown>
      </div>
    );
  } else {
    console.log(currentQuestionIndex);
    return (
      <>
        {submitData()}
        <div className='border rounded-xl bg-white  mt-20 w-11/12 h-5/6 m-auto px-10 py-5 shadow-xl flex flex-col justify-center text-center'>
          <h1 className=''>You're finished now, go Home </h1>
          <br></br>
          <h3 className=' '>Final Score: {currentScore} /10 </h3>
          <br></br>
          <h5>
            <i>Scores will be adjusted with a multiplier of 1.6 for "hard" and 1.3 for "medium" quiz</i>
          </h5>
          <br></br>

          <button className='border mx-auto px-4 py-1 rounded-full bg-purple-500 text-white' onClick={goHome}>
            Home
          </button>
          <button className='border mx-auto px-4 py-1 rounded-full bg-purple-500 text-white' onClick={goLeaderboard}>
            Leaderboard
          </button>
        </div>
      </>
    );
  }
};

export default QuestionCurrentPage;
