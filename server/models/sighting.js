const db = require("../database/connect");

class Sighting {
  constructor({
    sighting_id,
    account_id,
    title,
    info,
    sighting_location,
    sighting_date,
  }) {
    this.sighting_id = sighting_id;
    this.account_id = account_id;
    this.title = title;
    this.info = info;
    this.sighting_location = sighting_location;
    this.sighting_date = sighting_date;
  }

  static get all() {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await db.query("SELECT * FROM sightings");
        const allSightings = response.rows.map((row) => new Sighting(row));
        resolve(allSightings);
      } catch (err) {
        reject(err);
      }
    });
  }

  static async create(data) {
    return new Promise(async (resolve, reject) => {
      try {
        const { account_id, title, info, sighting_location, sighting_date } =
          data;
        const response = await db.query(
          "INSERT INTO sightings (account_id, title, info, sighting_location, sighting_date) VALUES ($1, $2, $3, $4, $5) RETURNING *",
          [account_id, title, info, sighting_location, sighting_date]
        );
        const newSighting = new Sighting(response.rows[0]);
        resolve(newSighting);
      } catch (err) {
        reject("Sighting could not be created");
      }
    });
  }
}

module.exports = Sighting;
