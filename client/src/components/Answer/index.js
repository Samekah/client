import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { submitAnswer } from "../../actions";
import "./style.css";

const Answer = ({ word }) => {
  const correctAnswer = useSelector((state) => state.result[1]);
  let style = "border mx-auto px-4 py-1 rounded-full bg-purple-500 text-white";

  const dispatch = useDispatch();

  const sendAnswer = () => {
    dispatch(submitAnswer(word));
  };

  return (
    <button className={style} onClick={sendAnswer}>
      {word}
    </button>
  );
};
export default Answer;
