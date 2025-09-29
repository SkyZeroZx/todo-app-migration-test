import { NgModule } from '@angular/core';
import { LegacySharedModule } from './shared.module';
import { FeatureAComponent } from './feature-a.component';
import { FeatureAService } from './feature-a.service';
import { MULTI_MARKER } from './tokens';

@NgModule({
  imports: [LegacySharedModule, FeatureAComponent],
  exports: [FeatureAComponent, LegacySharedModule],
  providers: [FeatureAService, { provide: MULTI_MARKER, useValue: 'feature-a', multi: true }]
})
export class FeatureAModule {}
