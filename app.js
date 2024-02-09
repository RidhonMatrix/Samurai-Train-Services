const express = require('express');
const routes = require('./Routes/route');
const mongoose = require("mongoose");


const { DB_USER, DB_PASSWORD, DB_HOST, DB_PORT } = process.env;

//for docker 
// const dbUrl = `mongodb://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/`;

//for local
const dbUrl = `mongodb://127.0.0.1:27017`;

mongoose
  .connect(dbUrl)
  .then(() => {
    console.log("Connected to database!");
  })
  .catch((error) => {
    console.log("Connection failed!", error);
    process.exit();
  });


const app = express();

app.use(express.json());

app.use("/api", routes);

app.get("/health", (req, res) => {
    res.status(200).send("All OK!");
});
const port = 8000;
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
 });