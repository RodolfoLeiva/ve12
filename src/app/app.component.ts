import { Component ,OnInit,  ViewChild} from '@angular/core';
import {SidenavService} from './sidebar/sidenav.service';
import { MdSidenav } from '@angular/material';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [SidenavService]
})


export class AppComponent  {
  
 
}