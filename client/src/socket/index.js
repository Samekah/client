import io from "socket.io-client";




const socket = io("/api2/*")

socket.on("connect", () => {
    console.log(`Socket.io has connected to ${socket.id}!`)
});

// socket.on('admin-message', msg => console.log(msg));

export { socket }
