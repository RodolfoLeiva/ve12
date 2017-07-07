import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MaterialModule} from '@angular/material';
import { SidenavService } from './sidebar/sidenav.service';
import { AppComponent } from './app.component';
import { sidebarComponent } from './sidebar/sidebar.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { BuscarComponent} from './cabecera/buscar/buscar.component';
import { AparecesbComponent } from './sidebar/aparecesb/aparecesb.component';
import {MdTabsModule} from '@angular/material';
import { routing, appRoutingProviders} from './aroutes/app.routing';
import {dashboardComponent} from './pages/dashboard/dashboard.component';
import {workflowComponent} from './pages/workflow/workflow.component';
import {tableroworkflowComponent} from './pages/workflow/tableroworkflow/tableroworkflow.component';
import {poComponent} from './pages/po/po.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';

// Imports the PanelBar
import { PanelBarModule } from '@progress/kendo-angular-layout';

@NgModule({
    declarations: [
    AppComponent,
    sidebarComponent,
    CabeceraComponent,
    BuscarComponent,
    AparecesbComponent,
    dashboardComponent,
    workflowComponent,
    poComponent,
    tableroworkflowComponent,
  
  ],
  imports: [
  MdTabsModule,
    BrowserModule,
    MaterialModule,
    routing,
    CommonModule ,
     BrowserAnimationsModule,
     PanelBarModule

  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
