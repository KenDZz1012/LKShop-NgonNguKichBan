import  mongoose ,{ConnectOptions}  from "mongoose";
import config from 'config';
import log from '../apps/logger'

const connect = () => {
    const dbUri: string = config.get("app.dbUri")
    return mongoose.connect(dbUri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      } as ConnectOptions)
      .then(()=>{
        log.info("Database Connected");
      })
      .catch(err=>{
        log.error("db Error",err)
        process.exit(1)
      })
}

export default connect