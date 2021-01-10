import express from "express";
import { v4 as uuidv4 } from 'uuid';
import { userInfo } from "os";

const router = express.Router();

// Sample students array of objects
let students = [
    {
        id: uuidv4(),
        firstName: "James",
        lastName: "Bond",
        age: 16,
    },
    {
        id: uuidv4(),
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

// GET request -- retrieves a student by ID!
router.get("/:id", (req, res) => {
    const { id } = req.params;

    const queryStudent = students.find((student) => student.id === id);

    res.send(queryStudent);
});

// POST request -- adds a new student!
router.post("/", (req, res) => {

    // Takes in an expected student from request
    const student = req.body;

    // Create and add a new student into our mock database
    const studentWithID = { id: uuidv4(), ...student, };
    students.push(studentWithID);

    res.send(`${student.firstName} has been added!`);
});

// DELETE request -- deletes a student by id!
router.delete("/:id", (req, res) => {
    const { id } = req.params;

    students = students.filter((student) => student.id !== id);

    res.send(`User with the ID ${id} was deleted!`);
});

// PATCH request -- updates a student by id!
// Note: you can also use a PUT request
router.patch("/:id", (req, res) => {
    const { id } = req.params;
    const { firstName, lastName, age } = req.body;

    // Find user by id
    const queryStudent = students.find(student => student.id === id);

    if (firstName)
        queryStudent.firstName = firstName;

    if (lastName)
        queryStudent.lastName = lastName;

    if (age)
        queryStudent.age = age;

    res.send(queryStudent);

})

export default router;