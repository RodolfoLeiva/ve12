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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    sidebarComponent,
    CabeceraComponent,
    BuscarComponent,
    AparecesbComponent
  

  ],
  imports: [
  MdTabsModule,
    BrowserModule,
    MaterialModule,
    BrowserAnimationsModule


 

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
