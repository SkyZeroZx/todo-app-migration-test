import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-123-weird',
  imports: [CommonModule],
  templateUrl: '../.hidden_templates/123-weird.html',
})
export class Component123WeirdComponent {
  items: string[] | null = null; // intentionally null initially (edge case)
  pluralMap = { '=0': 'none', '=1': 'one (weird)', 'other': '# many' };

  get count(): number {
    return this.items?.length ?? 0;
  }
}
