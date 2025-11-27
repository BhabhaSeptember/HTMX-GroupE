import express from "express";

// Initialize an express app and store in variable 'app'
const app = express();

// MIDDLEWARE
// Set static folder
app.use(express.static("public"));

// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded({ extended: true }));

// Parse JSON bodies (as sent by API clients)
app.use(express.json());

let currentPrice = 60;

app.get("/get-price", (req, res) => {
  currentPrice = currentPrice + ( (Math.random() * 2) - 1); //e.g. 0.5 - 1 = -0.5
  res.send("$" + currentPrice.toFixed(2));
});

// Start the server
app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
