import { Component ,OnInit,  ViewChild} from '@angular/core';
import {SidenavService} from './sidebar/sidenav.service';
import { MdSidenav } from '@angular/material';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {
  @ViewChild('sidenav') public sidenav: MdSidenav;



 public constructor(
    private translate: TranslateService,
    private localStorage: LocalStorageService,
    private sidenavService: SidenavService
  ) {
  /**
   * OnInit life cycle hook
   */
  public ngOnInit(): void {
    // Store sidenav to service
    this.sidenavService
      .setSidenav(this.sidenav);
  }
}