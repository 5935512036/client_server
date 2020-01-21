var net = require('net')
var HOST = '127.0.0.1'
var PORT =  6969;
var i = 0

net.createServer(function (sock) {
    console.log('CONNECTED: ' + sock.remoteAddress + ':' + sock.remotePort);
    sock.on('data', function (data) {
        let answer=Math.floor(Math.random() * 21);
        parseInt(answer)
        console.log('DATA FROME Client ' +  ': ' + data);
        
        if (data.toString().length == 10)
            sock.write('OK');

        else if (data.toString() == answer.toString())
            
            sock.write('BINGO');

        else if (data.toString() !=answer.toString())
            sock.write('WRONG');
            
        i++
    }
    );
    sock.on('close', function (data) {
        console.log('CLOSED: ' + sock.remoteAddress + ' ' + sock.remotePort);
    });
    sock.on('error', (err) => console.log('error' + err))
}).listen(PORT, HOST);

console.log('Server listening on ' + HOST + ':' + PORT);