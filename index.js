const { driverDatabase, personDatabase } = require("./database");

const emre = personDatabase.findByName("Emre");
const ferdi = personDatabase.findByName("Ferdi");

emre.addFood("Erik", "0,25", "3", true);
ferdi.addFood("Ceviz", "0,10", "5", false);

personDatabase.update(emre);
personDatabase.update(ferdi);

console.log(personDatabase.findByName("Emre"));

console.log();

console.log(personDatabase.findByName("Ferdi"));
