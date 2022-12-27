const db = require("../database/connect");

class User {
  constructor({ account_id, username, user_password }) {
    this.account_id = account_id;
    this.username = username;
    this.user_password = user_password;
  }

  static async getOneById(account_id) {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await db.query(
          "SELECT * FROM accounts WHERE account_id = $1",
          [account_id]
        );
        if (response.rows.length != 1) {
          throw new Error("Unable to locate account");
        }
        const user = new User(response.rows[0]);
        resolve(user);
      } catch (err) {
        reject(err.message);
      }
    });
  }

  static async getOneByUsername(username) {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await db.query(
          "SELECT * FROM accounts WHERE username = $1",
          [username]
        );
        if (response.rows.length != 1) {
          throw new Error("Unable to locate account.");
        }
        const user = new User(response.rows[0]);
        resolve(user);
      } catch (err) {
        reject(err.message);
      }
    });
  }

  static async create(data) {
    return new Promise(async (resolve, reject) => {
      try {
        const { username, user_password } = data;
        let response = await db.query(
          "INSERT INTO accounts (username, user_password) VALUES ($1, $2) RETURNING *",
          [username, user_password]
        );
        const newUser = new User(response.rows[0]);
        resolve(newUser);
      } catch (err) {
        reject(err);
      }
    });
  }
}

module.exports = User;
