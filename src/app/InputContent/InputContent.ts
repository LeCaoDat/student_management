import {Component} from '@angular/core';
import {Teacher} from '../Teacher/Teacher'
@Component({
  selector: 'input-content',
  inputs: ['teacher'],
  templateUrl: './InputContent.html',
  styleUrls: ['./InputContent.css'],
})
export class InputContent {
  teacher: Teacher;
  errors: string[];
  temp: boolean = false;
  days: string[];
  months: string[];
  years: string[];
  str: string;

  constructor() {
    this.days = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31"];
    this.months = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];
    this.years = ["1990", "1991", "1992", "1993", "1994", "1995", "1996", "1997", "1998", "1999", "2000", "2001", "2002", "2003", "2004", "2005", "2006", "2007", "2008", "2009", "2010", "2011", "2013", "2014", "2015", "2016"];
  }

  isNumber(subject) {
    if (subject >= 0 && subject <= 10) {
      return true;
    }
    else {
      return false;
    }
  }

  nhuan(year: number) {
    if (year % 4 == 0) {
      if ((year % 100 == 0) && (year % 400 == 0)) return true;
      if ((year % 100 != 0) && (year % 400 != 0)) return true;
    }
    return false;
  }

  isDate(day: number, month: number, year: number) {
    if (month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12) {
      if (day >= 1 && day <= 31) {
        return true;
      }
      else {
        return false;
      }
    }
    else if (month == 4 || month == 6 || month == 9 || month == 11) {
      if (day >= 1 && day <= 30) {
        return true;
      }
      else {
        return false;
      }
    }
    else if (month == 2) {
      if (this.nhuan(year) && (day >= 1 && day <= 29)) {
        return true;
      }
      else if (!this.nhuan(year) && (day >= 1 && day <= 28)) {
        return true;
      }
      else {
        return false;
      }
    }
    else {
      return false;
    }
  }

  addStudent(firstName: HTMLInputElement, lastName: HTMLInputElement, day: HTMLInputElement, month: HTMLInputElement, year: HTMLInputElement, mathematicMark: HTMLInputElement, physicMark: HTMLInputElement): void {
    this.errors = [];
    if (firstName.value.trim() == '' || lastName.value.trim() == '' || day.value.trim() == '' || month.value.trim() == '' || year.value.trim() == '' || mathematicMark.value.trim() == '' || physicMark.value.trim() == '') {
      this.errors.push('Please input all field');
      this.temp = true;
    }
    else {
      this.str = day.value + "/" + month.value + "/" + year.value;
      if (!firstName.value.match("^[a-zA-Z\\sđâấầẩẫậăắằẳẵặêếềểễệưứừửữựơớờởỡợôốồổỗộéèẻẽẹýỳỷỹỵúùủũụíìỉĩịóòỏõọáàảãạĐÂẤẦẨẪẬĂẮẰẲẴẶÊẾỀỂỄỆƯỨỪỬỮỰƠỚỜỞỠỢÔỐỒỔỖỘÉÈẺẼẸÝỲỶỸỴÚÙỦŨỤÍÌỈĨỊÓÒỎÕỌÁÀẢÃẠ_-]+$")) {
        this.errors.push('Firstname error');
      }
      if (!lastName.value.match("^[a-zA-Z\\sđâấầẩẫậăắằẳẵặêếềểễệưứừửữựơớờởỡợôốồổỗộéèẻẽẹýỳỷỹỵúùủũụíìỉĩịóòỏõọáàảãạĐÂẤẦẨẪẬĂẮẰẲẴẶÊẾỀỂỄỆƯỨỪỬỮỰƠỚỜỞỠỢÔỐỒỔỖỘÉÈẺẼẸÝỲỶỸỴÚÙỦŨỤÍÌỈĨỊÓÒỎÕỌÁÀẢÃẠ_-]+$")) {
        this.errors.push('Lastname error');
      }
      if (!this.isNumber(mathematicMark.value)) {
        this.errors.push('Mathematic Mark error');
      }
      if (!this.isNumber(physicMark.value)) {
        this.errors.push('Physic Mark error');
      }
      if (!this.isDate(parseInt(day.value), parseInt(month.value), parseInt(year.value)) || isNaN(parseInt(day.value)) || isNaN(parseInt(month.value)) || isNaN(parseInt(year.value))) {
        this.errors.push('Day of birth error');
      }
      if (this.errors.length == 0) {
        this.teacher.addStudent(firstName.value, lastName.value, this.str, parseFloat(mathematicMark.value), parseFloat(physicMark.value));
        this.temp = false;
        console.log(`Adding student firstName: ${firstName.value}, lastName: ${lastName.value}, dayOfBirth: ${this.str}, mathematicMark: ${mathematicMark.value}, physicMark: ${physicMark.value}`);
      }
      else {
        this.temp = true;
      }
    }
  }

}
