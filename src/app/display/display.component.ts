import { Component, OnInit } from '@angular/core';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrl: './display.component.css'
})
export class DisplayComponent implements OnInit {

  subject = this.counterService.subject

  constructor(private counterService: CounterService) {}

  ngOnInit(): void {}


}
