import { Injectable } from '@nestjs/common';
import { Student } from './student.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { MongoRepository } from 'typeorm';
import { v4 as uuid } from "uuid";
import { CreateStudentInput } from './create-student.input';

@Injectable()
export class StudentService {
    constructor(
        @InjectRepository(Student) public studentRepository: MongoRepository<Student>
    ) { }

    async createStudent(CreateStudentInput: CreateStudentInput): Promise<Student> {
        const { firstName, lastName } = CreateStudentInput;

        const student = this.studentRepository.create({
            id: uuid(),
            firstName,
            lastName
        })

        return this.studentRepository.save(student);
    }

    async getStudentById(id: string): Promise<Student> {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        return this.studentRepository.findOne({ id });
    }

    async getAllStudents(): Promise<Student[]> {
        return this.studentRepository.find();
    }

    async getManyStudents(ids: string[]): Promise<Student[]> {
        return this.studentRepository.find({
            where: {
                id: {
                    $in: ids
                }
            }
        })
    }
}
