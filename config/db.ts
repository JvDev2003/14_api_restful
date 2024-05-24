import mongoose from "mongoose";
import config from "config";

async function connect() {

    const dbUri = config.get<string>("dbUri")

    try {
        await mongoose.connect(dbUri)
        console.log("Conectou ao banco com sucesso")

    } catch (e) {
        console.log("Não foi possivel conectar ao banco")
        console.log(`Error: ${e}`)
    }
}

export default connect;