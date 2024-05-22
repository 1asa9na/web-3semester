import { Component, Input } from '@angular/core';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrl: './update.component.css'
})
export class UpdateComponent {

  constructor(private counterService: CounterService) { }

  @Input() value: number = 0
  @Input() label: string = ""

  updateValue() {
    this.counterService.updateValue(this.value)
  }
}
