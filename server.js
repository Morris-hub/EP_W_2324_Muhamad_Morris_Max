const Parkhaus = require('./framework/Parkhaus.js'); // Passe den Pfad entsprechend an
const Parkplatz = require('./framework/Parkplatz.js'); // Passe den Pfad entsprechend an

const express = require('express');
const app = express();
const port = 3000;



app.use(express.static('public'));


app.get('/index', (req, res) => {
});

//Alle Daten des Parkhaus
app.get('/', (req, res) => {

    const ParkhausData = new Parkhaus("1", "Parkhaus 1", "Musterstraße 1");
    res.send(ParkhausData.parkhausOverview());
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



app.listen(port, () => console.log
    (`App listening on http://localhost:${port}`));