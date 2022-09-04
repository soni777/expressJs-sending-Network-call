const express = require("express");
// console.log(typeof express);

const app = express();
// console.log(typeof app);

app.get("/", (request, response) => {
  response.send("Hello World");
});

app.get("/date", (request, response) => {
  let date = new Date();
  response.send(`Today date was ${date}`);
});

app.get("/page", (request, response) => {
  response.sendFile("./page.html", { root: __dirname });
});

app.listen(3000);
