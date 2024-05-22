import { Directive, HostBinding, HostListener, OnInit, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCustom]'
})
export class CustomDirective implements OnInit {

  @HostBinding('style.fontFamily') fontFamily = 'sans-serif'
  @HostBinding('style.fontSize') fontSize = '1.5em'
  @HostBinding('style.border') border = '2px solid tomato'
  @HostBinding('style.maxWidth') maxWidth = 'max-content'
  @HostBinding('style.padding') padding = '8px 16px'
  @HostBinding('style.borderRadius') borderRadius = '10px'
  @HostBinding('style.color') color = 'tomato'
  @HostBinding('style.backgroundColor') backgroundColor = 'white'
  @HostBinding('style.fontStyle') fontStyle = ''

  @HostListener('mouseenter') mouseenter() {
    if (this.backgroundColor == 'white') {
      this.backgroundColor = this.color
      this.color = 'white'
    }
    else {
      this.color = this.backgroundColor
      this.backgroundColor = 'white'
    }
  }

  @HostListener('click') click() {
    if(this.fontStyle) {
      this.fontStyle = ''
    }
    else {
      this.fontStyle = 'italic'
    }
  }

  @HostListener('mouseleave') mouseleave() {
    if (this.backgroundColor == 'white') {
      this.backgroundColor = this.color
      this.color = 'white'
    }
    else {
      this.color = this.backgroundColor
      this.backgroundColor = 'white'
    }
  }

  constructor(private elementRef: ElementRef) {
    this.hideElement()
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.showElement()
    }, 5000)
  }

  private hideElement() {
    this.elementRef.nativeElement.style.display = 'none';
  }

  private showElement() {
    this.elementRef.nativeElement.style.display = ''; // Показать элемент
  }
}
