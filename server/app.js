const dotenv = require("dotenv");
const express = require("express");
const cors = require("cors");
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

  config() {
    dotenv.config();
    const db = new DBConnection();
    db.connect();
  }

  useMiddlewares() {
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
  }

  useRoutes() {
    this.app.use(require("./router"));
    this.app.use(NotFoundError);
    this.app.use(ErrorHandler);
  }

  listen() {
    this.app.listen(process.env.PORT, () => {
      console.log(`Running server at port ${process.env.PORT}`);
    });
  }
}

const app = new Server();
app.listen();
