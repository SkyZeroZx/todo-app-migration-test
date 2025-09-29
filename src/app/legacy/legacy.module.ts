import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LegacyIfComponent } from './legacy-if.component';
import { LegacyListComponent } from './legacy-list.component';

@NgModule({
  declarations: [LegacyListComponent, LegacyIfComponent],
  imports: [CommonModule],
})
export class LegacyModule {}
