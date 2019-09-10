
// Events fired//


// -b, --bandwidth #[kmgKMG | pps]  bandwidth to send at in bits/sec or packets per second
// -e, --enhancedreports    use enhanced reporting giving more tcp/udp and traffic information
// -f, --format    [kmgKMG]   format to report: Kbits, Mbits, KBytes, MBytes
// -i, --interval  #        seconds between periodic bandwidth reports
// -l, --len       #[kmKM]    length of buffer in bytes to read or write (Defaults: TCP=128K, v4 UDP=1470, v6 UDP=1450)
// -m, --print_mss          print TCP maximum segment size (MTU - TCP/IP header)
// -o, --output    <filename> output the report or error message to this specified file
// -p, --port      #        server port to listen on/connect to
// -u, --udp                use UDP rather than TCP
// 	--udp-counters-64bit use 64 bit sequence numbers with UDP
// -w, --window    #[KM]    TCP window size (socket buffer size)
// -z, --realtime           request realtime scheduler
// -B, --bind      <host>   bind to <host>, an interface or multicast address
// -C, --compatibility      for use with older versions does not sent extra msgs
// -M, --mss       #        set TCP maximum segment size (MTU - 40 bytes)
// -N, --nodelay            set TCP no delay, disabling Nagle's Algorithm
// -S, --tos       #        set the socket's IP_TOS (byte) field

//////////////////* Event Server *//////////////////////////
button_connect_s.addEventListener('click', (result) => {
    let data = {};
    data.info = [];
	
    data.info.push('-s');
    if(bandwidth_check_s.checked) data.info.push('-b') && data.info.push(bandwidth_text_s.value);
	if(enhaced_check_s.checked)	data.info.push('-e') && data.info.push(enhaced_text_s.value);
	if(format_check_s.checked) data.info.push('-f') && data.info.push(format_text_s.value);
	if(interval_check_s.checked) data.info.push('-i') && data.info.push(interval_text_s.value);
	if(length_check_s.checked) data.info.push('-l') && data.info.push(length_text_s.value);
	if(print_max_mtu_check_s.checked) data.info.push('-m') && data.info.push(print_max_mtu_text_s.value);  
	if(output_check_s.checked) data.info.push('-o') && data.info.push(output_text_s.value);	
	if(port_check_s.checked) data.info.push('-p') && data.info.push(port_text_s.value);
	if(udp_check_s.checked) data.info.push('-u') && data.info.push(udp_text_s.value);
	if(window_check_s.checked) data.info.push('-w') && data.info.push(window_text_s.value);
	if(real_time_check_s.checked) data.info.push('-z ') && data.info.push(real_time_text_s.value); 
	if(bind_check_s.checked) data.info.push('-B') && data.info.push(bind_text_s.value);		
	if(compatibility_check_s.checked) data.info.push('-C') && data.info.push( compatibility_text_s.value);
	if(set_max_mtu_check_s.checked) data.info.push('-M') && data.info.push(set_max_mtu_text_s.value);
	if(no_delay_check_s.checked) data.info.push('-N') && data.info.push(no_delay_text_s.value);
    
    
    if(localhost_s.checked) {
        data.host = 'localhost'
    } else {
        data.host = ip_s.value;
        data.port = port_s.value;
        data.username = username_s.value;
        data.passwd = passwd_s.value;
    }
    console.log(data);
    fetch('http://localhost:8080/server', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
        body: JSON.stringify(data)
    }).then(function (data) {
          console.log(data);
        if(data != undefined){
          //alert('Dispositivo adicionado com sucesso');
        } else { 
          //alert('Problema ao adicionar usuário');  
        }
      })
 });

button_connect_c.addEventListener('click', (result) => {
	let data = {};
    data.info = [];
    
    data.info.push('-c'); 
    if(bandwidth_check_c.checked) data.info.push('-b') && data.info.push(bandwidth_text_c.value);
	if(enhaced_check_c.checked)	data.info.push('-e') && data.info.push(enhaced_text_c.value);
	if(format_check_c.checked) data.info.push('-f') && data.info.push(format_text_c.value);
	if(interval_check_c.checked) data.info.push('-i') && data.info.push(interval_text_c.value);
	if(length_check_c.checked) data.info.push('-l') && data.info.push(length_text_c.value);
	if(print_max_mtu_check_c.checked) data.info.push('-m') && data.info.push(print_max_mtu_text_c.value);  
	if(output_check_c.checked) data.info.push('-o') && data.info.push(output_text_c.value);	
	if(port_check_c.checked) data.info.push('-p') && data.info.push(port_text_c.value);
	if(udp_check_c.checked) data.info.push('-u') && data.info.push(udp_text_c.value);
	if(window_check_c.checked) data.info.push('-w') && data.info.push(window_text_c.value);
	if(real_time_check_c.checked) data.info.push('-z ') && data.info.push(real_time_text_c.value); 
	if(bind_check_c.checked) data.info.push('-B') && data.info.push(bind_text_c.value);		
	if(compatibility_check_c.checked) data.info.push('-C') && data.info.push(compatibility_text_c.value);
	if(set_max_mtu_check_c.checked) data.info.push('-M') && data.info.push(set_max_mtu_text_c.value);
	if(no_delay_check_c.checked) data.info.push('-N') && data.info.push(no_delay_text_c.value);
    
    
});

