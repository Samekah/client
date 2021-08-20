import React, { useState, useEffect } from "react";
import axios from 'axios'
import { LeaderBoardEntry } from '../../components'
import "./style.css";

const Leaderboard = () => {



  const [data, setData] = useState([])
  const [error, setError] = useState()

  useEffect(() => {
    async function leaderboardScores() {
      try {
        const result = await axios.get(
          `/api/*`
        )
        setData(result.data.leaderboard)
      }
      catch (err) { setError(err.message) }
    } leaderboardScores()
  }, []);


  // "Hard" difficulty scores get a multiplier of 1.6
  // "Medium" - multiplier of 1.3

  let multiplyScore = (el) => {
    let newScore = el.score;
    if (el.difficulty === "hard") {
      newScore *= 1.6;
    }
    if (el.difficulty === "medium") {
      newScore *= 1.3;
    }
    return { ...el, score: Math.ceil(newScore) };
  }


  const renderLeaderboard = dataParam => {


    const multipleid = dataParam.map(el => {
      if
        (el.difficulty === "hard") {
        return { ...el, score: Math.ceil(el.score *= 1.6) }
      }
      if (el.difficulty === "medium") {
        return { ...el, score: Math.ceil(el.score *= 1.3) };
      }
      else return { ...el };

    }).sort((a, b) => b.score - a.score);

    console.log(multipleid)


    return multipleid.map((t, i) => <LeaderBoardEntry key={i} place={i + 1} name={t.name} score={t.score} difficulty={t.difficulty} />)
  }


  return (
    <>

      <div className='border rounded-xl bg-white  mt-20 w-11/12 h-5/6 m-auto px-10 py-5 shadow-xl flex flex-col justify-center text-center'>
        <h1 className=''>Quizzo Leaderboard </h1>

        <table className=" w-full mt-6 mx-auto table text-black border-separate space-y-4 z-2">
          <thead className="bg-purple-darker text-white">
            <tr>
              <th className="p-3">Place</th>
              <th className="p-3">Name</th>
              <th className="p-3">Score</th>
              <th className="p-3">Difficulty</th>
            </tr>
          </thead>
          <tbody>
            {renderLeaderboard(data)}
          </tbody>
        </table>



      </div>
    </>
  );
};

export default Leaderboard;