var net = require('net');
var client = new net.Socket();
var HOST = '127.0.0.1';
var PORT = 6969;

var client = new net.Socket();
client.connect(PORT, HOST, () => {
    client.write('5935512036')
})


client.on('data', (data) =>{
    console.log('Data from server : ', data.toString())
    let answer=Math.floor(Math.random() * 21);
    parseInt(answer)
    client.write(answer.toString())
    
    if (data.toString() == 'BINGO'){
        console.log(answer.toString()) ;
        client.destroy();
    }
})