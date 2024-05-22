import { Component, OnInit } from '@angular/core';
import { TableService } from '../table.service';
import { Element } from '../element';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent implements OnInit {
  private elements: Element[] = []

  constructor(public tableService: TableService) { }

  getElements(): Element[] {
    return this.elements
  }

  ngOnInit(): void {
    this.elements = this.tableService.getElements()
  }
}
