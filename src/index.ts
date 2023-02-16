import "./loadEnvirontment.js";
import express from "express";

const app = express();
const port = process.env.PORT ?? 4000;

app.listen(port, () => {
  console.log(`Server is listening requests from ${port} port.`);
});
