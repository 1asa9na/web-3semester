import { Injectable } from '@angular/core';
import { Element } from './element';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class TableService {
  ELEMENTS = new BehaviorSubject<Element[]>([])

  constructor() {}

  pushElement(): void {
    let newArray = this.ELEMENTS.value
    newArray.push(this.newElement())
    this.ELEMENTS.next(newArray)
  }

  popElement(): void {
    let newArray = this.ELEMENTS.value
    newArray.pop()
    this.ELEMENTS.next(newArray)
  }

  getElements(): Element[] {
    return this.ELEMENTS.value
  }

  private newElement(): Element {
    return (this.ELEMENTS.value.length) ? { 
      id: this.ELEMENTS.value[this.ELEMENTS.value.length - 1].id + 1,
      title: `Element ${this.ELEMENTS.value[this.ELEMENTS.value.length - 1].id + 1}`,
      colorString: this.getColorString(),
      date: new Date()
    } as Element : {
      id: 1,
      title: `Element 1`,
      colorString: this.getColorString(),
      date: new Date()
    } as Element
  }

  private getColorString(): string {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
}
