class Parkhaus {

    //Kapazität 


    constructor(id, name, adresse) {
        this.id = id;
        this.name = name;
        this.adresse = adresse;
        this.parkplaetze = new Array(20);
        this.anzahlBegegterParkplaetze = 0;
    }

    einfahren() {
        // Implementierung des Einfahrens
        const aktuelleZeit = new Date();
        console.log(`Ein Fahrzeug ist ${aktuelleZeit} eingefahren.`);
    }

    ausfahren() {
        // Implementierung des Ausfahrens
        const aktuelleZeit = new Date();
        console.log(`Ein Fahrzeug ist am ${aktuelleZeit} ausgefahren.`);
    }

    erstelleJSON() {
        return {
            parkhaus: {
                name: this.name,
                standort: this.standort,
                kapazitaet: this.kapazitaet,
                verfuegbarePlaetze: this.verfuegbarePlaetze,
                parkplaetze: this.parkplaetze
            }
        };
    }

    verfügbar() {

    }
}

module.exports = Parkhaus;



class ParkplatzWeb {
    constructor(parkhaus) {
        this.parkhaus = parkhaus;
    }

    zeigeParkplatzStatus() {
        console.log(`Es sind ${this.parkhaus.anzahlBegegterParkplaetze} Parkplätze von ${this.parkhaus.parkplaetze.length} belegt`);
    }


    zeigeParkhausInfo() {
        console.log(`Parkhausinformationen: ${this.parkhaus.name}, ${this.parkhaus.adresse}`);
    }

    bezahleMitPayPal(betrag) {
        console.log(`Zahlung von ${betrag} Euro mit PayPal.`);
        return true; // Erfolgreiche Zahlung
    }
}

// Beispielanwendung

/*
const parkhaus = new Parkhaus(1, 'Test Parkhaus', 'Musterstraße 123');
const parkplatz1 = new Parkplatz(1, false, parkhaus);
const parkplatz2 = new Parkplatz(2, true, parkhaus);
const ticket1 = new Ticket(1, 2);

parkhaus.parkplaetze.push(parkplatz1, parkplatz2);

const webInterface = new ParkplatzWeb(parkhaus);


/*
// Beispielaufrufe
parkhaus.einfahren();
parkplatz1.parken();
parkhaus.einfahren();
parkplatz2.parken();
parkplatz2.verlassen();
parkhaus.ausfahren();
webInterface.zeigeParkplatzStatus();
webInterface.bezahleMitPayPal(5.0);

ticket1.einfahren();
ticket1.ausstempeln();
ticket1.ZietHinzufügenInStunden(22);
console.log(ticket1.zeitAusstempeln);
*/