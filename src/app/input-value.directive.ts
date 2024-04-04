import { Directive, ElementRef, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[appInputValue]'
})
export class InputValueDirective {
  @Output() inputValue: EventEmitter<string> = new EventEmitter<string>();

  constructor(private elementRef: ElementRef) { }

  @HostListener('input')
  onInput() {
    const value = this.elementRef.nativeElement.value;
    this.inputValue.emit(value);
  }
}
