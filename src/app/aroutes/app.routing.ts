import  {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';


// los componentes a utilizar

import {dashboardComponent} from '../pages/dashboard/dashboard.component';
import {workflowComponent} from '../pages/workflow/workflow.component';

const appRoutes	: Routes = [
	{path:'',component : dashboardComponent},
	{path:'dashboard',component : dashboardComponent},
	{path:'workflow',component : workflowComponent}

];
export const appRoutingProviders: any [] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

