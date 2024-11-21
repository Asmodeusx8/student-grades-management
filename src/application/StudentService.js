class StudentService {
    constructor(studentRepository) {
      this.studentRepository = studentRepository;
    }
  
    async createStudent(data) {
      return await this.studentRepository.create(data);
    }
  
    async getStudents() {
      return await this.studentRepository.findAll();
    }
  }
  
  module.exports = StudentService;
  