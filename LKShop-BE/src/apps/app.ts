import express from "express";
import config from 'config'
import cors from 'cors'
import dotenv from 'dotenv';
dotenv.config();

const app = express();
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use("/static", express.static(config.get("app.static_folder")));
app.set('trust proxy', 1)
app.use(cors())

export default app;
