const env = process.env.ENV

//token retirado para enviar o codigo
export default {
    port: 3000,
    dbUri: "mongodb://localhost:27017/Movies",
    env: env
}