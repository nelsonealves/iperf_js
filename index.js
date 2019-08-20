var Client = require('ssh2').Client;
 
var conn = new Client();

conn.connect({
  host: '192.168.7.30',
  port: 22,
  username: 'admin',
  password: 'admin01'
});

exec_iperf_s = () => {
conn.exec('iperf -s', (err, stream)=>{
if (err) throw err;
stream.on('close', function(code, signal) {
console.log('Stream :: close :: code: ' + code + ', signal: ' + signal);
conn.end();
}).on('data', function(data) {
console.log('STDOUT: ' + data);

}).stderr.on('data', function(data) {
console.log('STDERR: ' + data);
});
}, (teste)=>{console.log(teste)})

}




 
conn.on('ready', () => {
  console.log('Client :: ready');
exec_iperf_s();


});

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
