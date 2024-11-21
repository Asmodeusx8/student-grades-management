class StudentController {
    constructor(studentService) {
      this.studentService = studentService;
    }
  
    async createStudent(req, res) {
      try {
        const student = await this.studentService.createStudent(req.body);
        res.status(201).json(student);
      } catch (error) {
        res.status(400).json({ message: error.message });
      }
    }
  
    async getStudents(req, res) {
      try {
        const students = await this.studentService.getStudents();
        res.status(200).json(students);
      } catch (error) {
        res.status(400).json({ message: error.message });
      }
    }
  }
  
  module.exports = StudentController;
  