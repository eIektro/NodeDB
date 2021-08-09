const Food = require("./food");
const uuid = require("uuid");

class Person {
  constructor(
    id = uuid.v4(),
    ad,
    soyad,
    telefon,
    email,
    boy,
    kilo,
    refrigarator = []
  ) {
    this.id = id;

    this.ad = ad;
    this.soyad = soyad;
    this.telefon = telefon;
    this.email = email;
    this.boy = boy;
    this.kilo = kilo;
    this.refrigarator = refrigarator;
  }

  addFood(name, weight, price, isVegetable) {
    const food = new Food(name, weight, price, isVegetable);
    this.refrigarator.push(food);
    return food;
  }

  static create({ id, ad, soyad, telefon, email, boy, kilo, refrigarator }) {
    return new Person(id, ad, soyad, telefon, email, boy, kilo, refrigarator);
  }
}

module.exports = Person;
