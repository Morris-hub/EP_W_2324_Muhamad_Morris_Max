
//verwende ("fs") ein von Node.js-Dateisystemmodul um in einer Datei etwas zu speichern, aktualisieren und zu löschen.
const fs = require('fs');

class Ticket {
    constructor(id, kostenPer30Min) {
        this.id = id;
        this.kostenPer30Min = kostenPer30Min;
        this.zeitEinfahren = null;
        this.zeitAusstempeln = null;
    }

    einfahren() {
        this.zeitEinfahren = new Date();
        const einfahrenInfo = {
            ticketId: this.id,
            zeitEinfahren: this.zeitEinfahren.toISOString(),
            message: `Kunde mit Ticket ${this.id} ist um ${this.zeitEinfahren} eingefahren `,
        };

        const jsonString = JSON.stringify(einfahrenInfo);

        this.speichernInDatei(jsonString, 'einfahren');
    
        return jsonString;
    }

    ausstempeln(){
        this.zeitAusstempeln = new Date();
        const ausstempelnInfo = {
            ticketId: this.id,
            zeitAusstempeln: this.zeitAusstempeln.toISOString(),
            message: `Kunde mit Ticket ${this.id} hat sich um ${this.zeitAusstempeln} ausgestempelt`,
        };

        const jsonString = JSON.stringify(ausstempelnInfo);

        this.speichernInDatei(jsonString, 'ausstempeln');
    
        return jsonString;
    }

    speichernInDatei(jsonString, aktion){
        const dateiName = 'DB.json';

        // Versuchen Sie, den aktuellen Inhalt der Datei zu laden
        let gespeicherteDaten;
        try {
            gespeicherteDaten = JSON.parse(fs.readFileSync(dateiName, 'utf-8'));
        } catch (error) {
            gespeicherteDaten = [];
        }   

        // Fügen Sie den neuen JSON-String hinzu
        gespeicherteDaten.push({
            aktion: aktion,
            data: JSON.parse(jsonString)
        });

        // Speichern Sie die aktualisierten Daten in der Datei
        fs.writeFileSync(dateiName, JSON.stringify(gespeicherteDaten, null, 2));

        // Optional: Laden und Aktualisieren der JSON-Datei
        const gespeicherterInhalt = JSON.parse(fs.readFileSync(dateiName, 'utf-8'));
        // Hier können Sie den Inhalt aktualisieren, wenn nötig

        // Löschen der JSON-Datei nach Verwendung (optional)
        // fs.unlinkSync(dateiName);

    }

    leseanAusDatei(){
        return fs.readFileSync('DB.json', 'utf-8');
    }

    setStundeZeitAusstempeln(zeitInStunden){
        if(!this.zeitAusstempeln){
            this.zeitAusstempeln = new Date();
        }

        this.zeitAusstempeln.setHours(zeitInStunden);   
    }

    setMinutenZeitAusstempeln(zeitInMinuten){
        if(!this.zeitAusstempeln){
            this.zeitAusstempeln = new Date();
        }

        this.zeitAusstempeln.setMinutes(zeitInMinuten);
    }

    berechneZeitdifferenInMin(){
        
        return (this.zeitAusstempeln.getHours() * 60 + this.zeitAusstempeln.getMinutes()) - 
               (this.zeitEinfahren.getHours()* 60 + this.zeitEinfahren.getMinutes()); 
    }

    berechneKosten(){
       
        return Math.ceil(this.berechneZeitdifferenInMin() / 30) * this.kostenPer30Min;
    }


}

const ticket1 = new Ticket(1, 2.5);
ticket1.einfahren();
ticket1.ausstempeln();
console.log(ticket1.leseanAusDatei());