import {Person} from '../Person/Person.ts'
export class Student extends Person {
    id: number;
    mathematicmark: number;
    physicmark: number;
    average: number;
    status: string;

    constructor(id: number, firstname: string, lastname: string, dob: string, mathematicmark: number, physicmark: number) {
        super(firstname, lastname, dob);
        this.id = id;
        this.mathematicmark = mathematicmark;
        this.physicmark = physicmark;
        this.average = (this.mathematicmark + this.physicmark) / 2;
        if (this.average < 5) {
            this.status = 'Failed'
        }
        else {
            this.status = 'Passed'
        }
    }

}	