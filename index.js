// index.js
const express = require("express");
const app = express();
const port = 3000;
console.log("Hello");
console.log("there");

app.get("/", (req, res) => {
	res.send("Hello heyy World from Node.js in Docker hello! ");
});

app.listen(port, () => {
	console.log(`Server listening at http://localhost:${port}`);
});
