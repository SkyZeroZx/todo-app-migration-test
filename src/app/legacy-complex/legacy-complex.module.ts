import { NgModule, ModuleWithProviders } from '@angular/core';
import { FeatureBModule } from './feature-b.module';
import { LegacySharedModule } from './shared.module';
import { LegacyShellComponent } from './legacy-shell.component';
import { COMPLEX_CONFIG, MULTI_MARKER } from './tokens';

@NgModule({
  imports: [FeatureBModule],
  exports: [FeatureBModule]
})
export class LegacyComplexModule {
  static forRoot(name: string, version = '1.0'): ModuleWithProviders<LegacyComplexModule> {
    return {
      ngModule: LegacyComplexModule,
      providers: [
        { provide: COMPLEX_CONFIG, useValue: { name, version } },
        { provide: MULTI_MARKER, useValue: 'complex-root', multi: true }
      ]
    };
  }
}
