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

app.use("/api/", router)

app.listen(port, async () => {
    await db();

    console.log(`Aplicação está rodando na porta: ${port}`)
})