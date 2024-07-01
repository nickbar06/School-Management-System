import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Lesson } from './lesson.entity';
import { Repository } from 'typeorm';
import { v4 as uuid } from 'uuid';
import { CreateLessonInput } from './lesson.input';

@Injectable()
export class LessonService {
    constructor(
        @InjectRepository(Lesson) private LessonRepository: Repository<Lesson>
    ) { }

    async createLesson(CreateLessonInput: CreateLessonInput): Promise<Lesson> {
        const { name, startDate, endDate } = CreateLessonInput;

        const lesson = this.LessonRepository.create({
            id: uuid(),
            name,
            startDate,
            endDate
        });

        return this.LessonRepository.save(lesson);
    }

    async getLesson(id: string): Promise<Lesson> {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        return this.LessonRepository.findOne({ id });
    }

    async getAllLessons(): Promise<Lesson[]> {
        return this.LessonRepository.find();
    }
}
