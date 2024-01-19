
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
            message: `Kunde mit Ticket ${this.id} ist um ${this.zeitEinfahren} eingefahren`,
        };
        return JSON.stringify(einfahrenInfo);
    }


    ausstempeln() {
        this.zeitAusstempeln = new Date();
        console.log(`Kunde mit Ticket ${this.id} hat sich um ${this.zeitAusstempeln} ausgesptempelt `);
    }

    ZietHinzufügenInStunden(zeitInStunden) {
        this.zeitAusstempeln.setHours(zeitInStunden);
    }

}
