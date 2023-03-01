import { Directive, ElementRef, Input, OnInit } from '@angular/core'
 
@Directive({
  selector: '[custom]',
})
export class CustomDirective implements OnInit {
 
  @Input() custom: string='';
 
  constructor(private el: ElementRef) {
    this.custom='';
  }
 
  ngOnInit() {
    this.el.nativeElement.classList.add(this.custom);
  } 
}