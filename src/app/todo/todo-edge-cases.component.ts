import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo-edge-cases',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './todo-edge-cases.component.html',
  styleUrls: ['./todo-edge-cases.component.css']
})
export class TodoEdgeCasesComponent {
  values = [null, undefined, '', 0, false, 'Angular', 'Migration'];
  switchValue: any = '';
  dateValue = new Date(2000, 0, 1);
  pluralMap = {
    '=0': 'No items',
    '=1': 'One item',
    'other': '# items'
  };
  count = 0;
  setSwitch(val: any) {
    this.switchValue = val;
  }
  setCount(val: number) {
    this.count = val;
  }
}