import {Component} from '@angular/core';
import { Angular2DataTableModule } from 'angular2-data-table';
import {
  TableOptions,
  TableColumn,
  ColumnMode
} from 'angular2-data-table';

@Component({
  selector: 'main-content',
  inputs: ['rows'],
  templateUrl: './MainContent.html',
  styleUrls: ['./MainContent.css'],

})
export class MainContent {

  rows = [];

  options = new TableOptions({
    columnMode: ColumnMode.force,
    headerHeight: 50,
    footerHeight: 50,
    limit: 5,
    rowHeight: 'auto',
    columns: [
      new TableColumn({ name: 'ID', sortable: true }),
      new TableColumn({ name: 'Firstname', sortable: true }),
      new TableColumn({ name: 'Lastname', sortable: true }),
      new TableColumn({ name: 'Dob', sortable: true }),
      new TableColumn({ name: 'Average', sortable: true }),
      new TableColumn({ name: 'Status', sortable: true }),
    ]
  });

}
