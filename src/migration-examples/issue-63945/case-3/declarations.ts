import {Component, Directive} from '@angular/core';

@Component({selector: 'used-comp', template: 'Used'})
export class UsedComponent {}

@Directive({selector: '[unused-dir]'})
export class UnusedDirective {}
