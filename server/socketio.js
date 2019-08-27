let io = require('socket.io').listen(7070);

io.on('connection', (socket)=>{
	console.log('Usuário id:'+ socket.id + " conectou");

	socket.on('ping', ()=>{
		console.log('Recebeu ping');
		socket.emit('pong');
	})
	socket.on('disconnect', () => {
		console.log('Usuário id:'+ socket.id + " desconectou");
	})
})	


module.exports = io;