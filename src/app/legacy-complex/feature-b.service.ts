import { Injectable } from '@angular/core';
import { FeatureAService } from './feature-a.service';

@Injectable()
export class FeatureBService {
  constructor(private a: FeatureAService) {}
  getCombined() { return 'B+' + this.a.getName(); }
}
