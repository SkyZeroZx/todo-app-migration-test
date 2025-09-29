import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-komponent-å',
  imports: [CommonModule],
  templateUrl: '../templates with space/komponent-Å.html',
})
export class KomponentUnicodeComponent {
  data: string[] | undefined = [];

  get safeData(): string[] {
    return this.data ?? [];
  }
}
