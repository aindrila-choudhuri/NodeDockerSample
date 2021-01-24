const express = require("express");

const app = express();

app.get("/", (req, res) => res.send("Hello awesome!"));

app.listen("3001", () => console.log("app running at port 3001"));