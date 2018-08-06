var socket = io();

socket.on('connect',()=>{
    console.log('terkoneksi ke server');
    // socket.emit ('createEmail',{
    //     to:'irvina@gmail.com',
    //     text:'hello from another world'

    // });

    // socket.emit('createMessage',{
    //     from : 'irvan',
    //     text : 'yup udah bisa jalan'
    // });

    
});

socket.on('disconnect',()=>{
    console.log('koneksi terputus ke server');
});

// socket.on('newEmail',function(email){
//     console.log('New Email',email);
// });

socket.on('newMessage',function(message){
    console.log('newMessage',message);
});