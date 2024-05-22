import { Component } from '@angular/core';
import { TableService } from '../table.service';

@Component({
  selector: 'app-edittable',
  templateUrl: './edittable.component.html',
  styleUrl: './edittable.component.css'
})
export class EdittableComponent {

  constructor(public tableService: TableService) { }

  addElement() {
    this.tableService.pushElement()
  }

  deleteElements() {
    this.tableService.popElement()
  }
}
