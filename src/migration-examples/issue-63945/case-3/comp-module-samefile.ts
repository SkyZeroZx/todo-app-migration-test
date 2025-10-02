import {Component} from '@angular/core';


@Component({
  selector: 'my-comp',
  template: '<other></other>',
  imports: [OtherComponent]
})
export class MyComp {}
