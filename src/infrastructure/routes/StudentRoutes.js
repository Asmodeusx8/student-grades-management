const express = require('express');
const StudentController = require('../controllers/StudentController');
const StudentService = require('../../application/StudentService');
const StudentRepository = require('../repositories/StudentRepository');

const router = express.Router();
const studentRepository = new StudentRepository();
const studentService = new StudentService(studentRepository);
const studentController = new StudentController(studentService);

router.post('/students', (req, res) => studentController.createStudent(req, res));
router.get('/students', (req, res) => studentController.getStudents(req, res));

module.exports = router;
