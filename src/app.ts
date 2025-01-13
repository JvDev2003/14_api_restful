//.env
require("dotenv").config();

import express from "express";
import config from "config";

const app = express()

// JSON middleware
app.use(express.json())

// DB

import db from "../config/db"

// app port
const port = config.get<number>("port")

//Routes
import router from "./router";

//Logger
import Logger from "../config/logger";

//Middleware
import morganMiddleware from "./middleware/morganMiddleware";

app.use(morganMiddleware)

app.use("/api/", router)

app.listen(port, async () => {
    await db();

    Logger.info(`Aplicação está rodando na porta: ${port}`)
})