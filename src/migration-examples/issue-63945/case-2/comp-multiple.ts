import {Component} from '@angular/core';


import { ButtonComponent } from './button';
import { CardComponent } from './card';

@Component({
  selector: 'my-comp',
  template: '<my-button></my-button><my-card></my-card>',
  imports: [ButtonComponent, CardComponent]
})
export class MyComp {}
