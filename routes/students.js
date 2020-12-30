import express from "express";

const router = express.Router();

// Sample students array of objects
const students = [
    {
        id: 1,
        firstName: "James",
        lastName: "Bond",
        age: 16,
    },
    {
        id: 2,
        firstName: "Anna",
        lastName: "Jones",
        age: 15,
    }
]


// ROUTES
// All routes in this file are starting with /students by default!

// GET request -- retrieves all students!
router.get("/", (req, res) => {
    res.send(students);
});

export default router;