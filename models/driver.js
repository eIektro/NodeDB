const uuid = require("uuid");

class Driver {
  constructor(id = uuid.v4(), ad, soyad, telefon, email, car) {
    this.id = id;
    this.ad = ad;
    this.soyad = soyad;
    this.telefon = telefon;
    this.email = email;
    this.car = car;
  }

  showCar() {
    console.log(this.car);
  }

  static create({ id, ad, soyad, telefon, email, car }) {
    return new Driver(id, ad, soyad, telefon, email, car);
  }
}

module.exports = Driver;
