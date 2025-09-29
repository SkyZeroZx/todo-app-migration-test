import { Directive, ElementRef, Renderer2, Input } from '@angular/core';

@Directive({
  selector: '[lcHighlight]',
  standalone: true,
})
export class LegacyHighlightDirective {
  @Input('lcHighlight') color = 'yellow';
  constructor(private el: ElementRef, private r: Renderer2) {}
  ngOnInit() {
    this.r.setStyle(this.el.nativeElement, 'backgroundColor', this.color);
  }
}
