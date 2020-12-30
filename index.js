// This new import style is new to Node, allows for us to import modules instead of using require!

// Imports Express into our application! 
import express from "express";

// Allows for us to parse requests
import bodyParser from "body-parser"

// You can substitute studentRoutes with any name, as long as it's descriptive!
import studentRoutes from "./routes/students.js"

const app = express();
const PORT = 5000;

// This specifies that we will be using JSON data throughout our application! 
app.use(bodyParser.json());

// ROUTES

// GET request
app.get("/", (req, res) => {
    res.send("Welcome to the home page!");
})

// GET request using /students endpoint
app.use("/students", studentRoutes );

app.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT} ...`);
});

