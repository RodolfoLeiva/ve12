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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
    declarations: [
    AppComponent,
    sidebarComponent,
    CabeceraComponent,
    BuscarComponent,
    AparecesbComponent,
    dashboardComponent,
    workflowComponent
  

  ],
  imports: [
  MdTabsModule,
    BrowserModule,
    MaterialModule,
    routing,
     BrowserAnimationsModule

  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
