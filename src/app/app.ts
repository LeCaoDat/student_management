import {Component} from '@angular/core';
import {Teacher} from './Teacher/Teacher';
import {Student} from './Student/Student';

@Component({
  selector   : 'app',
  templateUrl: './app.html',
})
export class AppComponent {
  teacher: Teacher;
  constructor() {
    this.teacher = new Teacher('Uchiha', 'Obito', '19/09/1996');
    // this.teacher.addStudent('Lê Cao','Đạt','19/09/1996',8.0,8.0);
    // this.teacher.addStudent('Võ Thị','A','09/03/1996',8.0,8.0);
    this.fetch((Student) => {
      this.teacher.students.push(...Student);
    });
  }

  fetch(cb) {
    const req = new XMLHttpRequest();
    req.open('GET', './resources/data.json');
    req.onload = () => {
      cb(JSON.parse(req.response));
    };
    req.send();
  }
}
