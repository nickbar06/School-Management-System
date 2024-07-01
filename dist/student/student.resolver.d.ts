import { StudentService } from "./student.service";
import { CreateStudentInput } from "./create-student.input";
export declare class StudentResolver {
    private studentService;
    constructor(studentService: StudentService);
    getStudentById(id: string): Promise<import("./student.entity").Student>;
    crateStudent(createStudentInput: CreateStudentInput): Promise<import("./student.entity").Student>;
    getStudents(): Promise<import("./student.entity").Student[]>;
}
