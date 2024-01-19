class Parkhaus {
    constructor(name, standort, kapazitaet) {
        this.name = name;
        this.standort = standort;
        this.kapazitaet = kapazitaet;
        this.verfuegbarePlaetze = kapazitaet; // Startet mit allen Plätzen verfügbar
        this.parkplaetze = Array.from({ length: 20 }, (_, index) => ({ platzNummer: index + 1, status: "frei" }));
    }

    einfahren() {
        // Hier könntest du die Logik für das Einfahren implementieren
        // Beachte dabei, den Status des Parkplatzes zu aktualisieren
        // und die Anzahl der verfügbaren Plätze zu aktualisieren.
    }

    ausfahren() {
        // Hier könntest du die Logik für das Ausfahren implementieren
        // Beachte dabei, den Status des Parkplatzes zu aktualisieren
        // und die Anzahl der verfügbaren Plätze zu aktualisieren.
    }

    toJSON() {
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
}

module.exports = Parkhaus;
