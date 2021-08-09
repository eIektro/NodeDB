const BaseDatabase = require("./base-database");
const Person = require("../models/person");

class PersonDatabase extends BaseDatabase {
  findByName(name) {
    const objects = this.load();
    return objects.find((o) => o.ad == name);
  }
}

module.exports = new PersonDatabase(Person);
