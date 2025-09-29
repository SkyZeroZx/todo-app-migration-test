import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LegacyHighlightDirective } from './shared.directive';
import { ShortenPipe } from './shorten.pipe';
import { importProvidersFrom } from '@angular/core';
import { COMPLEX_CONFIG, ComplexConfig, MULTI_MARKER } from './tokens';

@NgModule({
  imports: [CommonModule, LegacyHighlightDirective, ShortenPipe],
  exports: [LegacyHighlightDirective, ShortenPipe, CommonModule]
})
export class LegacySharedModule {
  static forRoot(config: ComplexConfig): ModuleWithProviders<LegacySharedModule> {
    return {
      ngModule: LegacySharedModule,
      providers: [
        { provide: COMPLEX_CONFIG, useValue: config },
        { provide: MULTI_MARKER, useValue: 'shared-root', multi: true }
      ]
    };
  }
}
