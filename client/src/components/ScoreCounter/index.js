import React from 'react';
import {useSelector} from 'react-redux';
import axios from 'axios';

const ScoreCounter = () => {

    const currentScore = useSelector((state) => state.score);
    const username = useSelector((state) => state.username);
    const difficulty = useSelector((state) => state.difficulty);

    const handleClick = () => {
        console.log('CLICK');

        const req = {
            name: username,
            score: currentScore,
            difficulty: difficulty
          }
        
        axios.post('http://localhost:8080/leaderboard', req).then(response => {
            console.log(response);
          }).catch(console.warn);
    }

    return (<button onClick={handleClick}>SCORE_BUTTON</button>)
}

export default ScoreCounter;