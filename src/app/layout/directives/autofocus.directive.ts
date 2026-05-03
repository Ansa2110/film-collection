import { AfterViewInit, Directive, ElementRef, inject } from '@angular/core';

@Directive({
  selector: '[appAutofocus]',
  standalone: true
})
export class AutofocusDirective implements AfterViewInit {
  private readonly elementRef = inject(ElementRef<HTMLInputElement>);

  ngAfterViewInit(): void {
    this.elementRef.nativeElement.focus();
  }
}