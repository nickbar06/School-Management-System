import { Student } from './student.entity';
import { MongoRepository } from 'typeorm';
import { CreateStudentInput } from './create-student.input';
export declare class StudentService {
    studentRepository: MongoRepository<Student>;
    constructor(studentRepository: MongoRepository<Student>);
    createStudent(CreateStudentInput: CreateStudentInput): Promise<Student>;
    getStudentById(id: string): Promise<Student>;
    getAllStudents(): Promise<Student[]>;
    getManyStudents(ids: string[]): Promise<Student[]>;
}
