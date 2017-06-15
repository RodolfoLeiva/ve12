import { Component , OnInit} from '@angular/core' ;
import { BuscarComponent} from './buscar/buscar.component'
import {SidenavService} from '../sidebar/sidenav.service'

@Component({

selector:'r-cabecera',
templateUrl: './cabecera.component.html',
styleUrls: ['./cabecera.css']

})

export class CabeceraComponent implements OnInit {

  
  constructor(
    private sidenavService: SidenavService
  ) { }


  public ngOnInit(): void {
  
      
  }
  /**
   * Method to toggle application sidenav.
   */
  public toggleSidenav() {
    this.sidenavService
      .toggle()
      .then(() => { });
  }



}