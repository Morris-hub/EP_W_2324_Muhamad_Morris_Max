class Parkplatz {

    constructor(id, belegt, parkhaus) {
        this.id = id;
        this.belegt = belegt;
        this.parkhaus = parkhaus;
    }

    parken() {
        this.belegt = true;
        console.log(`Parkplatz ${this.id} wurde belegt.`);
        this.parkhaus.anzahlBegegterParkplaetze++;
    }

    verlassen() {
        this.belegt = false;
        console.log(`Parkplatz ${this.id} wurde freigegeben.`);
        this.parkhaus.anzahlBegegterParkplaetze--;
    }

    sendeNachricht(message) {
        console.log(`Nachricht von Parkplatz ${this.id}: ${message}`);
    }
}

module.exports = Parkplatz;