const http = require('http');
const url = require('url');


http.createServer(function (req, res) {
    let q = url.parse(req.url, true).query;
    if (q.first && q.second) {
        if (req.url.includes('/add?')) {

            res.writeHead(200, {
                'Content-Type': 'text/html'
            });
            let result = parseInt(q.first) + parseInt(q.second);
            res.write(`<html><body><p>Pierwsza liczba: ${q.first}</p><p>Druga libcza: ${q.second}</p><p>Wynik: ${result}</p></body></html>`);
            res.end();

        } else if (req.url.includes('/sub?')) {

            res.writeHead(200, {
                'Content-Type': 'text/html'
            });
            let result = parseInt(q.first) - parseInt(q.second);

            res.write(`<html><body><p>Pierwsza liczba: ${q.first}</p><p>Druga libcza: ${q.second}</p><p>Wynik: ${result}</p></body></html>`);
            res.end();

        } else if (req.url.includes('/mul?')) {

            res.writeHead(200, {
                'Content-Type': 'text/html'
            });
            let result = parseInt(q.first) * parseInt(q.second);

            res.write(`<html><body><p>Pierwsza liczba: ${q.first}</p><p>Druga libcza: ${q.second}</p><p>Wynik: ${result}</p></body></html>`);
            res.end();

        } else if (req.url.includes('/div?')) {

            res.writeHead(200, {
                'Content-Type': 'text/html'
            });
            let result = parseInt(q.first) / parseInt(q.second);

            res.write(`<html><body><p>Pierwsza liczba: ${q.first}</p><p>Druga libcza: ${q.second}</p><p>Wynik: ${result}</p></body></html>`);
            res.end();

        } else {
            res.writeHead(400, {
                'Content-Type': 'text/html'
            });
            res.end('Bledny adres!');
        }
    } else {
        res.writeHead(400, {
            'Content-Type': 'text/html'
        });
        res.end('Brak potrzebnych liczb do wykonania dzialania!');
    }
}).listen(8080);