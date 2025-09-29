import { Routes } from '@angular/router';

import { TodoAddComponent } from './todo/todo-add.component';
import { TodoListComponent } from './todo/todo-list.component';
import { TodoEdgeCasesComponent } from './todo/todo-edge-cases.component';
import { SwitchDemoComponent } from './todo/switch-demo.component';
import { ForDemoComponent } from './todo/for-demo.component';
import { IfDemoComponent } from './todo/if-demo.component';
import { DateDemoComponent } from './todo/date-demo.component';
import { PluralDemoComponent } from './todo/plural-demo.component';
import { NgContainerDemoComponent } from './todo/ng-container-demo.component';
import { ComplexDemoComponent } from './todo/complex-demo.component';
import { Component123WeirdComponent } from './todo/123-weird.component';
import { KomponentUnicodeComponent } from './todo/komponent-Å.component';
import { HiddenNameComponent } from './todo/.hidden-name.component';
import { SpaceInNameComponent } from './todo/space in name.component';
import { LongFilenameComponent } from './todo/this_is_a_very_long_filename_component_name_to_test_paths.component';
import { SpecialCharsComponent } from './todo/special-!@#-component.component';
import { EmptyBodyComponent } from './todo/emptybody.component';
import { NestedNgContainerComponent } from './todo/nested--ng--container.component';
import { LegacyListComponent } from './legacy/legacy-list.component';
import { LegacyIfComponent } from './legacy/legacy-if.component';

export const routes: Routes = [
  { path: '', redirectTo: 'add', pathMatch: 'full' },
  { path: 'add', component: TodoAddComponent },
  { path: 'list', component: TodoListComponent },
  { path: 'edge-cases', component: TodoEdgeCasesComponent },
  { path: 'switch', component: SwitchDemoComponent },
  { path: 'for', component: ForDemoComponent },
  { path: 'if', component: IfDemoComponent },
  { path: 'date', component: DateDemoComponent },
  { path: 'plural', component: PluralDemoComponent },
  { path: 'ng-container', component: NgContainerDemoComponent },
  { path: 'complex', component: ComplexDemoComponent },
  { path: '123-weird', component: Component123WeirdComponent },
  { path: 'komponent-å', component: KomponentUnicodeComponent },
  { path: '.hidden', component: HiddenNameComponent },
  { path: 'space in name', component: SpaceInNameComponent },
  { path: 'very/long/filename/test', component: LongFilenameComponent },
  { path: 'special-chars', component: SpecialCharsComponent },
  { path: 'emptybody', component: EmptyBodyComponent },
  { path: 'nested--ng--container', component: NestedNgContainerComponent },
  { path: 'legacy/list', component: LegacyListComponent },
  { path: 'legacy/if', component: LegacyIfComponent },
];
