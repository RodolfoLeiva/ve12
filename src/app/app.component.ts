import { Component ,OnInit,  ViewChild} from '@angular/core';
import {SidenavService} from './sidebar/sidenav.service';
import { MdSidenav } from '@angular/material';
import { plantillacolor } from './plantillacolor';
import * as glob from './global';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
 providers: [SidenavService]
})


export class AppComponent  {
  
 public plantillascolores:plantillacolor[];
 public rcolor:plantillacolor;	
	ngOnInit(){
		this.plantillascolores =  [
			new plantillacolor ('Energia','#ff8f00','#ffecb3','#fff8e1','#ff6f00','#ff8f00','#ffecb3','#fff8e1','#ff6f00',true)
			
		];
	this.rcolor = glob.plantillaactiva;
		
	}
}

export class plantillaactiva  {
	 
	
}