const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.set("view options", { layout: false } );

app.get('/hello',(req,res) => {
    res.send('Hello world!')
});

app.get('/form', (req, res) => {
	res.render('form');					  
});

app.use(bodyParser.urlencoded({ extended: true }));
app.post('/formdata', (req, res) => {
    res.render('formdata',{
        nickname:req.body.nickname,
        email:req.body.email,
        pass:req.body.pass,
    });
});

app.use(express.json()); 
app.post('/jsondata', (req, res) => {
    res.render('formdata',{
        nickname:req.body.nickname,
        email:req.body.email,
        pass:req.body.pass,
    });
});


app.listen(3000);
console.log('listening on port 3000...');