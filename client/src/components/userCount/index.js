import React, { useState } from "react";
import "./style.css";
import { useDispatch } from "react-redux";
import { addUserNum } from "../../actions";
import { socket } from "../../socket";

const UserCount = () => {
  let [count, setCount] = useState(0);

  socket.on("number-emit", (msg) => setCount(msg));

  return (
    <>
      <p className='mt-5'>Join the {count} Quizzo's playing right now! </p>
    </>
  );
};

export default UserCount;
