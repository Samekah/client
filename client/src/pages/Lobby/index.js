import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux"; // New imports to work with Redux
import "./style.css";
import { socket } from '../../socket'
import io from "socket.io-client";


const Lobby = () => {
    // state = { socket: null };


    return (
        <div id="Lobby">Lobby Hello!</div>
    );

}

export default Lobby;