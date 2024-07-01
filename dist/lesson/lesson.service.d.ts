import { Lesson } from './lesson.entity';
import { Repository } from 'typeorm';
import { CreateLessonInput } from './lesson.input';
export declare class LessonService {
    private LessonRepository;
    constructor(LessonRepository: Repository<Lesson>);
    createLesson(CreateLessonInput: CreateLessonInput): Promise<Lesson>;
    getLesson(id: string): Promise<Lesson>;
    getAllLessons(): Promise<Lesson[]>;
}
