

// ssh_connect = (host, port=22, username, password) => {
// 	var conn = new Client();
// 	conn.connect({
// 	  host: host,
// 	  port: port,
// 	  username: username,
// 	  password: password
// 	});
// 	conn.on('ready', () => {
// 		console.log('Client :: ready');
// 		//exec_iperf_s();
// 	});
// 	return conn;
// }

// document.querySelector('body .server ');
// let options_iperf = {
// 	'bandwith': '-b' , 
// 	'enhaced': '-e', 
// 	'format': '-f', 
// 	'interval': '-i', 
// 	'length': '-l', 
// 	'print_max_mtu': '-m', 
// 	'output': '-o', 
// 	'port': '-p', 
// 	'udp': '-u',
// 	'window': '-w' ,
// 	'real_time': '-z',
// 	'bind': '-B' ,
// 	'compatibility': '-C' ,
// 	'set_max_mtu': '-M',
// 	'no_delay': '-N',
// }


// exec_iperf_s = (node_ssh, command) => {
// 	node_ssh.exec('iperf' + command, (err, stream)=>{
// 		if (err) throw err;
// 			stream.on('close', function(code, signal) {
// 			console.log('Stream :: close :: code: ' + code + ', signal: ' + signal);
// 			conn.end();
// 	}).on('data', function(data) {
// 		console.log(data);

// 		}).stderr.on('data', function(data) {
// 			console.log('STDERR: ' + data);
// 		});
// 	}, (teste)=>{	
// 		console.log(teste)
// 	})

// }
// let teste = ssh_connect('192.168.10.1', 22, 'admin', 'admin');
//document.querySelector('body .server .connect').addListenerEvent('click', ()=>{console.log('clicou')});


 

/*
function myFunction() {
  var str = "How    are g    you doing today?";
  var res = str.split(" ");
  document.getElementById("demo").innerHTML = res;
}
*/
/*conn.shell(function(err, stream) {
    if (err) throw err;
    stream.on('close', function() {
      console.log('Stream :: close');
      conn.end();
    }).on('data', function(data) {
      console.log('OUTPUT: ' + data);
    });
    stream.end('ls -l\nexit\n');
  });
*/
