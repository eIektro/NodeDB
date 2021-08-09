/*
       _ _   _           _                            __   _      _    _             
  __ _(_) |_| |__  _   _| |__   ___ ___  _ __ ___    / /__(_) ___| | _| |_ _ __ ___  
 / _` | | __| '_ \| | | | '_ \ / __/ _ \| '_ ` _ \  / / _ \ |/ _ \ |/ / __| '__/ _ \ 
| (_| | | |_| | | | |_| | |_) | (_| (_) | | | | | |/ /  __/ |  __/   <| |_| | | (_) |
 \__, |_|\__|_| |_|\__,_|_.__(_)___\___/|_| |_| |_/_/ \___|_|\___|_|\_\\__|_|  \___/  - M.E.K
 |___/                                                                               

 */

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
