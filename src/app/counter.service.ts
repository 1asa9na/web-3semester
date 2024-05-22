import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  subject = new BehaviorSubject<number>(0)
  
  updateValue(value: number): void {
      this.subject.next(this.subject.value + value)
  }

}
