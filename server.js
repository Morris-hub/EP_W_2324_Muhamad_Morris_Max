const Parkhaus = require('./framework/Parkhaus.js'); // Passe den Pfad entsprechend an
const Parkplatz = require('./framework/Parkplatz.js'); // Passe den Pfad entsprechend an
const DBManagement = require('./framework/DBManagement.js');

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

    const DBManagementInstanz1 = new DBManagement();
    const DBJsonData = DBManagementInstanz1.jsonDateiAuslesen('DB.json');


    res.send(DBJsonData);

})

app.get('/update',(req,res) => {
    //hier wird das updaten der DB.json implimentiert
    const DBManagementInstanz2 = new DBManagement();

    DBManagementInstanz2.dbDateiUpdaten(1, 'belegt');
    DBManagementInstanz2.dbDateiUpdaten(3, 'belegt');
    DBManagementInstanz2.dbDateiUpdaten(5, 'belegt');
    DBManagementInstanz2.dbDateiUpdaten(7, 'belegt');
    DBManagementInstanz2.dbDateiUpdaten(9, 'belegt');

    res.send(DBManagementInstanz2.jsonDateiAuslesen('./DB/DB.json'));

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
