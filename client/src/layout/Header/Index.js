import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import './style.css'

const Header = () => {
    return (
        
        <nav className="bg-white flex flex-row justify-around mx-20 py-2 rounded-b-full">
            <NavLink className="homeLink" exact to="/">Home</NavLink>
            <NavLink className="leaderBoard" to="/Leaderboard">LeaderBoard</NavLink>
        </nav>

    );
}

export default Header;
