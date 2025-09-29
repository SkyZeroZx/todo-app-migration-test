import { NgModule } from '@angular/core';
import { FeatureAModule } from './feature-a.module';
import { FeatureBComponent } from './feature-b.component';
import { FeatureBService } from './feature-b.service';
import { MULTI_MARKER } from './tokens';

@NgModule({
  imports: [FeatureAModule, FeatureBComponent],
  exports: [FeatureBComponent, FeatureAModule],
  providers: [FeatureBService, { provide: MULTI_MARKER, useValue: 'feature-b', multi: true }]
})
export class FeatureBModule {}
