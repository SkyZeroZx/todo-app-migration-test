import {NgModule} from '@angular/core';
import {UsedComponent, UnusedDirective} from './declarations';

@NgModule({imports: [UsedComponent, UnusedDirective], exports: [UsedComponent, UnusedDirective]})
export class MixedModule {}
