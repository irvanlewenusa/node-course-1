const path = require ('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname,'../public');

//console.log(publicPath);
const port = process.env.port || 3000;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);
//console.log(path);

app.use(express.static(publicPath));

io.on('connection',(socket)=>{
    console.log('user baru terkoneksi');

    //socket.emit from admin text welcome to chat app
    socket.emit('newMessage',{
        from:'Admin',
        text: 'welcome to the chat app',
        createedAt: new Date().getTime()
    });
    //socket.broadcast.emit forma admin text new user joined
    socket.broadcast.emit('newMessage',{
        from : 'Admin',
        text:'new user joined',
        createedAt: new Date().getTime()
    });
    socket.on('createMessage',(message)=>{
        console.log('createMessage', message);


        io.emit('newMessage',{
            from: message.from,
            text: message.text,
            createedAt: new Date().getTime()
        });
        // socket.broadcast.emit('newMessage',{
        //     from: message.from,
        //     text: message.text,
        //     createedAt: new Date().getTime()
        // });

    });

    socket.on('disconnect',()=>{
        console.log('user koneksi terputus');
    });
});


server.listen(port,function(){

    console.log(`servernya nyala di port ${port}`);
});


// console.log(__dirname + '/../public');
// console.log(publicPath);
