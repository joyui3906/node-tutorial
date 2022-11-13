const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));

app.listen(8089, () => {
    console.log('listen on 8089');
    
});

app.get('/', (req, res) => {
    res.sendFile(__dirname+'/index.html');
}); 

app.get('/write.html', (req, res) => {
    res.sendFile(__dirname+'/write.html');
}); 

app.post('/add', (req, res) => {
    console.log(req.body);
    res.send('등록 완료');
});  