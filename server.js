const Parkhaus = require('./framework/Parkhaus.js'); // Passe den Pfad entsprechend an
const Parkplatz = require('./framework/Parkplatz.js'); // Passe den Pfad entsprechend an

const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.static('public'));

/*app.get('/', (req, res) => {
    res.send('Project Parksystem');
});*/


app.get('/index', (req, res) => {
});

//Alle Daten des Parkhaus
app.get('/', (req, res) => {

    const ParkhausData = new Parkhaus("1", "Parkhaus 1", "Musterstraße 1");
    res.send(ParkhausData.parkhausOverview());

})

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
