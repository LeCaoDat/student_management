import {Person} from '../Person/Person.ts'
import {Student} from '../Student/Student.ts'
export class Teacher extends Person {
    students: Student[];

    constructor(firstname: string, lastname: string, dob: string) {
        super(firstname, lastname, dob);
        this.students = [];
    }

    addStudent(firstname: string, lastname: string, dob: string, mathematicmark: number, physicmark: number): void {
        this.students.push(new Student(this.students.length + 1, firstname, lastname, dob, mathematicmark, physicmark));
    }

}	