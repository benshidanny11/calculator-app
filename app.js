import http from "http";
import express from "express";
import logger from "morgan";
import bodyParser from "body-parser";

const hostname = "127.0.0.1";
const port = 7000;
const app = express();
const server = http.createServer(app);

app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) =>
  res.status(200).send({
    message: "Welcome to the default API route",
  })
);

app.post("/multiply",  (req, res) => {

  const number1=req.body.number1;
  const number2=req.body.number2;

  const answer=number1 * number2;
  console.log("Answer: "+answer)
  res.status(200).send({
    message: "SUCCESS",
    result:answer
  });
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
