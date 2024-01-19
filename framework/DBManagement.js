const fs = require('fs');

class DBManagement {
    constructor(id) {
        this.id = id;
    }

    jsonDateiAuslesen(dateiName) {
        return fs.readFileSync(dateiName, 'utf-8');
    }

    dbDateiUpdaten(platzIndex, status) {
        const dateiName = './DB/DB.json';

        // Lese den aktuellen Inhalt der Datei
        const jsonData = JSON.parse(fs.readFileSync(dateiName, 'utf-8'));

        // Statusänderung des Platzes mit dem übergeben Index 
        const zuAktualisierenderParkplatz = jsonData.parkhaus.parkplaetze.find(parkplatz => parkplatz.platzNummer === platzIndex);

        if (zuAktualisierenderParkplatz) {
            // Aktualisiere den Status des gefundenen Parkplatzes
            zuAktualisierenderParkplatz.status = status;

            // Schreibe die aktualisierten Daten zurück in die Datei
            fs.writeFileSync(dateiName, JSON.stringify(jsonData, null, 2));

            console.log('Parkplatz wurde erfolgreich aktualisiert.');
        } else {
            console.log('Parkplatz nicht gefunden.');
        }

    }
}

module.exports = DBManagement;


/*DBManagement = new DBManagement();
console.log(DBManagement.jsonDateiAuslesen('./DB/DB.json'));

DBManagement.dbDateiUpdaten(1, 'belegt');
DBManagement.dbDateiUpdaten(3, 'belegt');
DBManagement.dbDateiUpdaten(5, 'belegt');
DBManagement.dbDateiUpdaten(7, 'belegt');
DBManagement.dbDateiUpdaten(9, 'belegt');
console.log(DBManagement.jsonDateiAuslesen('./DB/DB.json'));*/
