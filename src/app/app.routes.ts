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
	{ path: 'complex', component: ComplexDemoComponent }
];
