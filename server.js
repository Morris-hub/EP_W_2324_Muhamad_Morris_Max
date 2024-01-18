const Parkhaus = require('./business_logic/Parkhaus.js'); // Passe den Pfad entsprechend an


const express = require('express');
const app = express();
const port = 3000;

const json = '{"result":true, "count":42}';
const obj = JSON.parse(json);


app.use(express.static('public'));
const ParkhausData = new Parkhaus();

//Alle Daten des Parkhausese
app.get('/parkhausOverview', (req, res) => {
    res.send(ParkhausData);
});


//Verfügbare Parkplätze
app.get('/availablleParkinglots', (req, res) => {
    res.send(ParkhausData);
});

//Nicht verfügbare Parkplätze
app.get('/unavailableParkinglots', (req, res) => {
    res.send(ParkhausData);
});



app.get('/', (req, res) => {
    res.send(obj);
});


app.get('/index', (req, res) => {
    res.redirect('park1.html');
});
app.listen(port, () => console.log
    (`App listening on http://localhost:${port}`));