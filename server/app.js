const dotenv = require("dotenv");
const express = require("express");
const cors = require("cors");
const path = require("path");
const DBConnection = require("./configs/mongo.config");
const { NotFoundError, ErrorHandler } = require("./middlewares/errorHandler");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.config();
    this.useMiddlewares();
    this.useRoutes();
  }

  async config() {
    dotenv.config({ path: __dirname + "/.env" });
    const db = new DBConnection();
    try {
      this.dbconnection = await db.connect();
      if (process.env.NODE_ENV !== "production") {
        console.log(
          `Database connected at port ${this.dbconnection.connection.host}`
        );
      }
    } catch (error) {
      console.log(error);
    }
  }

  useMiddlewares() {
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
  }

  useRoutes() {
    this.app.use(require("./router"));

    // deployment

    if (process.env.NODE_ENV === "production") {
      this.app.use(
        express.static(path.join(__dirname, "..", "client", "build"))
      );
      this.app.get("*", (req, res) => {
        res.sendFile(
          path.join(__dirname, "..", "client", "build", "index.html")
        );
      });
    }

    // deployment
    this.app.use(NotFoundError);
    this.app.use(ErrorHandler);
  }

  listen() {
    this.app.listen(process.env.PORT, () => {
      if (process.env.NODE_ENV !== "production") {
        console.log(`Running server at port ${process.env.PORT}`);
      }
    });
  }
}

const app = new Server();
app.listen();
