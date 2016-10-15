import {NgModule} from '@angular/core'
import {AppComponent} from "./app";
import {FormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";
import {HttpModule} from "@angular/http";
import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import {Person} from './Person/Person';
import {Student} from './Student/Student';
import {Teacher} from './Teacher/Teacher';
import {MainContent} from './MainContent/MainContent';
import {InputContent} from './InputContent/InputContent';
import {HeaderComponent} from './HeaderComponent/HeaderComponent';
import { Angular2DataTableModule } from 'angular2-data-table';
@NgModule({
  declarations: [AppComponent, MainContent, InputContent, HeaderComponent, ],
  imports     : [BrowserModule, FormsModule, HttpModule, Angular2DataTableModule],
  providers   : [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap   : [AppComponent]
})
export class AppModule {

}
