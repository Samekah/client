import React from 'react';
import './style.css'


const LeaderBoardEntry = ({ name, score, difficulty, place }) => {



    return (

        <tr className=" text-center">
            <td>
                {place}
            </td>
            <td>
                {name}
            </td>
            <td >
                {score}
            </td>
            <td className="p-3 font-bold">
                <span className={`text-gray-50 rounded-full px-3 py-1 ${difficulty === "hard" ? "bg-green-400" : "bg-red-400"} ${difficulty === "medium" ? "bg-yellow-400" : "bg-red-400"}`}>{difficulty}</span>
            </td>
        </tr>


    );
}

export default LeaderBoardEntry;
