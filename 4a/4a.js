const http = require('http');
const url = require('url');

http.createServer((req, res) => {
    let q = url.parse(req.url, true).query;
    if (q.first && q.second) {
        if (req.url.includes('/add?')) {
            showResult(q.first,q.second,parseInt(q.first) + parseInt(q.second),res)
        } else if (req.url.includes('/sub?')) {
            showResult(q.first,q.second,parseInt(q.first) - parseInt(q.second),res)
        } else if (req.url.includes('/mul?')) {
            showResult(q.first,q.second,parseInt(q.first) * parseInt(q.second),res)
        } else if (req.url.includes('/div?')) {
            showResult(q.first,q.second,parseInt(q.first) / parseInt(q.second),res)
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

const showResult = (first,second,result,res) => {
    res.writeHead(200, {
        'Content-Type': 'text/html'
    });
    res.write(`<html><body><p>Pierwsza liczba: ${first}</p><p>Druga libcza: ${second}</p><p>Wynik: ${result}</p></body></html>`);
    res.end();
}