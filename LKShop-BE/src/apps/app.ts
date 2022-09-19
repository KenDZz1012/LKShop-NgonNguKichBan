import express, { NextFunction, Request, Response } from "express";
import config from 'config'
import cors from 'cors'
import dotenv from 'dotenv';
import routes from "../routes/routes";
dotenv.config();

const app = express();
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use("/static", express.static(config.get("app.static_folder")));
app.set('trust proxy', 1)
app.use(cors({
    credentials: true,
    origin: "http://localhost:8000"
}))

routes(app)

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
    const status = err?.status || 500;
    return res.status(status).json({
        "isSuccess": false,
        "message": err.message,
        "stack": err.stack,
    })
})
export default app;
