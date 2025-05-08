var http = require('http');

http.createServer(function (req, res) {
    res.setHeader('Access-Contaol-Allow-Origin', '*')
    res.setHeader('Access-Contaol-Allow-Methods', 'GET, POST')
    res.setHeader('Access-Contaol-Allow-Headers', 'Content-Type')
    
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end('{"contactSubject": ["General Enquery","Classes","Schedules","Instrnctor","Prices","Other","Ping"]}');
}).listen(5000);   