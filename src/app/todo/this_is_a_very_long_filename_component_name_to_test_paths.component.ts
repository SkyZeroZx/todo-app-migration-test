import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-long-name',
  imports: [CommonModule],
  templateUrl: '../../../external_templates/longname-template.html',
})
export class LongFilenameComponent {
  items: string[] | null = ['one', 'two', 'three'];

  get safeItems(): string[] {
    return this.items ?? [];
  }

  get itemsCount(): number {
    return this.safeItems.length;
  }
}
