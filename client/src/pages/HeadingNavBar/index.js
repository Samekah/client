import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.css'

const HeadingNavBar = () => {
    return (

        <nav className="bg-white flex flex-row justify-around mx-20 py-2 rounded-b-full shadow-xl">
            <NavLink className="homeLink" exact to="/">Home</NavLink>
            <NavLink className="leaderBoard" to="/Leaderboard">LeaderBoard</NavLink>
        </nav>

    );
}

export default HeadingNavBar;
