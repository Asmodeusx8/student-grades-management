const Student = require('../models/Student');

class StudentRepository {
  async create(data) {
    return await Student.create(data);
  }

  async findAll() {
    return await Student.findAll();
  }
}

module.exports = StudentRepository;
