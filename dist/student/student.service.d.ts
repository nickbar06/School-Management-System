import { Student } from './student.entity';
import { Repository } from 'typeorm';
import { CreateStudentInput } from './create-student.input';
export declare class StudentService {
    private studentRepository;
    constructor(studentRepository: Repository<Student>);
    createStudent(CreateStudentInput: CreateStudentInput): Promise<Student>;
    getStudentById(id: string): Promise<Student>;
    getAllStudents(): Promise<Student[]>;
}
