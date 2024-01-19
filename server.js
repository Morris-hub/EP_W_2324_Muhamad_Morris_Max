const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static('public'));

/*app.get('/', (req, res) => {
    res.send('Project Parksystem');
});*/


app.get('/', (req, res) => {
    const indexPath = path.join(__dirname, 'public', 'park1.html');
    res.sendFile(indexPath);
});

app.post('/reservierung',(req,res) => {
    console.log('JSON:', req.body);
    res.send(req.body)
})

app.get('/getReservierung',(req, res) => {
    const indexPath = path.join(__dirname, 'public', 'reservierung.html');
    res.redirect(indexPath);
})

app.listen(port, () => console.log
(`App listening on http://localhost:${port}`))