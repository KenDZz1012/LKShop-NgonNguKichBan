import express, { NextFunction, Request, Response } from "express";
import config from 'config'
import cors from 'cors'
import dotenv from 'dotenv';
import { appRouter } from '../decorators/routes.decorator';
import './appController'
import ErrorResponse from '../common/ErrorResponse'

dotenv.config();

const app = express();
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use("/static", express.static(config.get("app.static_folder")));
app.set('trust proxy', 1)
app.use(cors({
    credentials: true,
    origin: "http://localhost:3000"
}))

app.use(appRouter);

app.use(ErrorResponse)
export default app;
