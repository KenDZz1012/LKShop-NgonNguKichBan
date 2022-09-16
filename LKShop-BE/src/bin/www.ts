import app from "../apps/app";
import config from 'config'
import log from '../apps/logger'
import connect from '../common/connect'
import routes from "../routes/routes";

const port: number = config.get("app.port");

app.listen(port, () => {
    log.info(`Server running on port ${port}`);
    connect()
    routes(app)
})