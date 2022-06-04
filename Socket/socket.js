const app = require("express")();
const server = require("http").createServer(app);


//Make server and Client Interact 
const io = require("socket.io")(server, { cors: { origin: "*" } }) // integrate our http server with a new instance of socket.io
// server.get('/', (req, res) => res.send('Welcome to the Quizzo server'))

io.on('connection', socket => {
    console.log("'Ello, who's this we got here?") // runs when client first connects

    // get total number of client connections
    const participantCount = io.engine.clientsCount

    // send event only to new connecting client
    socket.emit('admin-message', 'Hi there, new friend!')


    // send event to all other clients (not new connecting client)
    socket.broadcast.emit('admin-message', `A new friend has arrived!`)

    // send event to all clients
    io.emit('admin-message', `There is ${participantCount} x friend here now!`)

    io.emit('number-emit', `${participantCount}`)


    socket.on("disconnect", socket => { // runs when client disconnects
        console.log("K bye then");


    });
});


module.exports = server