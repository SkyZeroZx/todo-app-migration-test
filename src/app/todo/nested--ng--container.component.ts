import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-nested-ng-container',
  imports: [CommonModule],
  templateUrl: '../deep/nested/folder/templates/nested-ng-container.html',
})
export class NestedNgContainerComponent {
  outer = true;
  nums = [1, 2, 3];
  nullVal: string | null = null;

  get displayVal(): string {
    return this.nullVal ?? 'fallback';
  }
}
