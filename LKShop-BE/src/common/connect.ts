import mongoose, { ConnectOptions } from "mongoose";
import config from 'config';
import log from '../apps/logger'

const connect = () => {

}

export class DB {
  dbUri: string;
  constructor() {
    this.dbUri = config.get("app.dbUri")
  }
  connect() {
    return mongoose.connect(this.dbUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    } as ConnectOptions)
      .then(() => {
        log.info("Database Connected");
      })
      .catch(err => {
        log.error("db Error", err)
        process.exit(1)
      })
  }
}