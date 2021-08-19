import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux"; // New imports to work with Redux
import "./styleHome.css";
import { scrubStr, shuffle, resetState, submitAnswer } from "../../actions";

import { Answer } from "../../components";

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
  const [btnCorrectStyle, setBtnCorrectStyle] = useState("border mx-auto mt-5 w-96 h-16 px-4 py-1 rounded-full bg-purple-500 text-white")
  const [btnIncorrectStyle, setBtnIncorrectStyle] = useState("border mx-auto mt-5 w-96 h-16 px-4 py-1 rounded-full bg-purple-500 text-white")

  const submitData = () => {
    console.log("Submit Data is calling");

    const req = {
      name: username,
      score: currentScore,
      difficulty: difficulty,
    };

    axios
      .post("http://localhost:8080/leaderboard", req)
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

  const sendIncorrect = () => {
    setBtnIncorrectStyle("border mx-auto mt-5 w-96 h-16 px-4 py-1 rounded-full bg-red-500 text-white")
    setTimeout(() =>{
      setKey((prevKey) => prevKey + 1);
      setCountdownKey((prevCountdownKey) => prevCountdownKey + 1);
      dispatch(submitAnswer(userAnswer));
    }, 3000)
  }

  const sendAnswer = (e) => {
    let userAnswer = e.target.value;
    setBtnCorrectStyle("border mx-auto mt-5 w-96 h-16 px-4 py-1 rounded-full bg-green-500 text-white");
    setTimeout(() =>{

      setKey((prevKey) => prevKey + 1);
      setCountdownKey((prevCountdownKey) => prevCountdownKey + 1);
      dispatch(submitAnswer(userAnswer));

    },3000);
    
  };

  if (currentQuestionIndex <= 9) {
    const answers = shuffle([
      ...results[currentQuestionIndex].incorrectAnswers,
      results[currentQuestionIndex].correctAnswer,
    ]);

    return (
      <div className='rounded-xl bg-purple-darker  mt-20 w-11/12 h-5/6 m-auto shadow-xl flex flex-col justify-center text-center text-white transform rotate-6'>
        <Countdown date={Date.now() + 3000} key={countdownKey} className='transform -rotate-6 text-4xl'>
          <div className='border rounded-xl bg-white w-full h-auto m-auto shadow-xl text-black transform -rotate-6'>
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
                  // <Answer key={i} word={t} />
                  <button
                    className={t===results[currentQuestionIndex].correctAnswer ? btnCorrectStyle : btnIncorrectStyle}
                    onClick={t===results[currentQuestionIndex].correctAnswer ? sendAnswer : sendIncorrect}
                    value={t}
                    key={i}
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
          <h3 className=' '>Final Score: {currentScore} /10 </h3>

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
