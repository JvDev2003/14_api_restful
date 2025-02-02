const env = process.env.ENV;
const dbUri = process.env.DBURI;
const port = process.env.PORT;

export default {
  port,
  dbUri,
  env,
};
