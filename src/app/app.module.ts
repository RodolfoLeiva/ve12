import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MaterialModule} from '@angular/material';
import { SidenavService } from './sidebar/sidenav.service';
import { AppComponent } from './app.component';
import { sidebarComponent } from './sidebar/sidebar.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { BuscarComponent} from './cabecera/buscar/buscar.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    sidebarComponent,
    CabeceraComponent,
    BuscarComponent

  ],
  imports: [
    BrowserModule,
    MaterialModule,
  RouterModule


 

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
