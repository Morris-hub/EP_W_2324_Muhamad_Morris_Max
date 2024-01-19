
class Reservierung {
    constructor(id, parkhaus, parkpaltz, laengeReserviereungInMin) {
        this.id = id;
        this.parkhaus = parkhaus;
        this.parkplatz = parkpaltz;
        this.laengeReservierungInMin = laengeReserviereungInMin;
    }

    reservieren() {
        this.parkplatz.parken();
    }
}
