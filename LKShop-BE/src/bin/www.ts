import app from "../apps/app";
import config from 'config'
import log from '../apps/logger'
import { DB } from '../common/connect'
const port: number = config.get("app.port");

app.listen(port, () => {
    log.info(`Server running on port ${port}`);
    new DB().connect();
})

