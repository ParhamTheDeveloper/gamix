const dotenv = require("dotenv").config();
const { default: mongoose } = require("mongoose");

class DBConnection {
  #DB_URL = null;

  constructor() {
    this.#DB_URL = process.env.DATABASE_URL;
  }

  async connect() {
    let conn;
    try {
      conn = await mongoose.connect(this.#DB_URL, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
      });
    } catch (error) {
      console.log(`Database Error: ${error.message}`);
    }
    return conn;
  }
}

module.exports = DBConnection;
