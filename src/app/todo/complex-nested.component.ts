import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-complex-nested',
  imports: [CommonModule],
  template: `
    <div *ngIf="showContainer" [ngClass]="containerClasses">
      <div *ngFor="let category of categories; trackBy: trackCategory">
        <h3>{{ category.name | titlecase }}</h3>
        <div [ngSwitch]="category.type">
          <div *ngSwitchCase="'items'">
            <div *ngFor="let item of category.items; index as i">
              <span [ngClass]="getItemClass(item)"> {{ i + 1 }}. {{ item.name | uppercase }} </span>
              <div [ngPlural]="item.count">
                <span *ngPluralCase="'=0'">No items</span>
                <span *ngPluralCase="'=1'">One item</span>
                <span *ngPluralCase="'other'">{{ item.count }} items</span>
              </div>
              <div [ngStyle]="getItemStyle(item)">
                Price: {{ item.price | currency : 'USD' }} Updated:
                {{ item.lastModified | date : 'short' }} Progress:
                {{ item.progress | percent : '1.0-0' }}
              </div>
            </div>
          </div>
          <div *ngSwitchCase="'summary'">
            <ng-container
              [ngTemplateOutlet]="summaryTemplate"
              [ngTemplateOutletContext]="{ data: category }"
            >
            </ng-container>
          </div>
          <div *ngSwitchDefault>
            <ng-container [ngComponentOutlet]="category.component"></ng-container>
          </div>
        </div>
      </div>
    </div>

    <ng-template #summaryTemplate let-data="data"> Summary: {{ data | json }} </ng-template>
  `,
})
export class ComplexNestedComponent {
  showContainer = true;
  containerClasses = 'main-container';

  categories: any[] = [];

  constructor() {
    // sample data to demonstrate nested structures
    this.categories = [
      {
        id: 'c1',
        name: 'fruits',
        type: 'items',
        items: [
          {
            name: 'apple',
            count: 3,
            price: 1.25,
            lastModified: new Date(),
            progress: 0.5,
            active: true,
            color: '#ffe5e5',
          },
          {
            name: 'banana',
            count: 0,
            price: 0.5,
            lastModified: new Date(),
            progress: 0.2,
            active: false,
            color: '#fffbe5',
          },
        ],
      },
      {
        id: 'c2',
        name: 'summary-section',
        type: 'summary',
        total: 2,
      },
      {
        id: 'c3',
        name: 'custom-component',
        type: 'other',
        component: null,
      },
    ];
  }

  trackCategory(index: number, cat: any) {
    return cat.id;
  }

  getItemClass(item: any) {
    return item.active ? 'active' : 'inactive';
  }

  getItemStyle(item: any) {
    return { backgroundColor: item.color };
  }
}
