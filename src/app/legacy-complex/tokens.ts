import { InjectionToken } from '@angular/core';

export interface ComplexConfig {
  name: string;
  version?: string;
  flags?: string[];
}

export const COMPLEX_CONFIG = new InjectionToken<ComplexConfig>('COMPLEX_CONFIG');

export const MULTI_MARKER = new InjectionToken<string>('MULTI_MARKER');
