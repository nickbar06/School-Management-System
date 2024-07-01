import { Resolver, Mutation, Args } from "@nestjs/graphql";
import { StudentService } from "./student.service";
import { StudentType } from "./student.type";
import { CreateStudentInput } from "./create-student.input";
import { Query } from "@nestjs/graphql";


@Resolver(of => StudentType)
export class StudentResolver {
    constructor(
        private studentService: StudentService
    ) { }

    @Query(returns => StudentType)
    getStudentById(
        @Args('id') id: string,
    ) {
        return this.studentService.getStudentById(id);
    }

    @Mutation(returns => StudentType)
    crateStudent(
        @Args('createStudentInput') createStudentInput: CreateStudentInput
    ) {
        return this.studentService.createStudent(createStudentInput)
    }


    @Query(returns => [StudentType])
    getStudents() {
        return this.studentService.getAllStudents();
    }
}