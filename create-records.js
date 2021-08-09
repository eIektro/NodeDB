const Driver = require("./models/driver");
const Person = require("./models/person");
const driverDatabase = require("./database/driverDatabase");
const personDatabase = require("./database/personDatabase");

const stefan = Driver.create({
  ad: "Stefan",
  soyad: "Mr.",
  telefon: "+22222222222",
  email: "stefan@getir.com",
  car: "Supra GTi",
});

const emre = Person.create({
  ad: "Emre",
  soyad: "Koral",
  telefon: "+11111111111",
  email: "emre@abc.com",
  boy: "174",
  kilo: "80",
});

const ferdi = Person.create({
  ad: "Ferdi",
  soyad: "Dursun",
  telefon: "+0000000000",
  email: "ferdi@cba.com",
  boy: "145",
  kilo: "35",
});

driverDatabase.save([stefan]);
personDatabase.save([emre, ferdi]);
