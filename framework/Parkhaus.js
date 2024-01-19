const Parkplatz = require('./Parkplatz.js'); // Passe den Pfad entsprechend an

class Parkhaus {
    constructor(id, name, adresse) {
        this.id = id;
        this.name = name;
        this.adresse = adresse;
        this.parkplaetze = Array.from({ length: 20 }, (_, index) => new Parkplatz(index + 1, false, this));
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

    parkhausOverview() {
        return {
            parkhaus: {
                name: this.name,
                standort: this.adresse,
                kapazitaet: this.parkplaetze.length,
                verfuegbarePlaetze: this.parkplaetze.filter(p => !p.belegt).length,
                parkplaetze: this.parkplaetze.map(p => ({ platzNummer: p.id, status: p.belegt ? "belegt" : "frei" }))
            }
        };
    }

    verfügbar() {
        // Hier könntest du die Logik implementieren, um zu überprüfen, ob Parkplätze verfügbar sind.
    }
}

module.exports = Parkhaus;
