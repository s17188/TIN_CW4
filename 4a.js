var http = require('http');
var url = require('url');


http.createServer(function (req, res) {
    if (req.url.includes('/add?')) {
        
        res.writeHead(200, { 'Content-Type': 'text/html' }); 
        let q = url.parse(req.url, true).query;
        let result = parseInt(q.first) + parseInt(q.second);

        res.write(`<html><body><p>Pierwsza liczba: ${q.first}</p><p>Druga libcza: ${q.second}</p><p>Wynik: ${result}</p></body></html>`);
        res.end();
    
    }
    else if (req.url.includes('/sub?')) {
        
        res.writeHead(200, { 'Content-Type': 'text/html' }); 
        let q = url.parse(req.url, true).query;
        let result = parseInt(q.first) - parseInt(q.second);

        res.write(`<html><body><p>Pierwsza liczba: ${q.first}</p><p>Druga libcza: ${q.second}</p><p>Wynik: ${result}</p></body></html>`);
        res.end();
    
    }
    else if (req.url.includes('/mul?')) {
        
        res.writeHead(200, { 'Content-Type': 'text/html' }); 
        let q = url.parse(req.url, true).query;
        let result = parseInt(q.first) * parseInt(q.second);

        res.write(`<html><body><p>Pierwsza liczba: ${q.first}</p><p>Druga libcza: ${q.second}</p><p>Wynik: ${result}</p></body></html>`);
        res.end();
    
    } else if (req.url.includes('/div?')) {
        
        res.writeHead(200, { 'Content-Type': 'text/html' }); 
        let q = url.parse(req.url, true).query;
        let result = parseInt(q.first) / parseInt(q.second);

        res.write(`<html><body><p>Pierwsza liczba: ${q.first}</p><p>Druga libcza: ${q.second}</p><p>Wynik: ${result}</p></body></html>`);
        res.end();
    
    }
    else
        res.end('Invalid Request!');

}).listen(8080);