require("dotenv").config();
const { default: mongoose } = require("mongoose");

class DBConnection {
  #DB_URL = null;

  constructor() {
    this.#DB_URL = process.env.DATABASE_URL;
  }

  async connect() {
    return await mongoose.connect(this.#DB_URL);
  }
}

const dbConnection = new DBConnection();
dbConnection.connect();

module.exports = {
  dbConnection,
};
