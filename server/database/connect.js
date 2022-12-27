const { Pool } = require("pg");

const db = new Pool({
  connectionString:
    "postgres://ncrwodar:xOerONyhDez-ygFEr_WgPtPJXZTFBKyF@snuffleupagus.db.elephantsql.com/ncrwodar",
});

console.log("DB connection established.");

module.exports = db;
