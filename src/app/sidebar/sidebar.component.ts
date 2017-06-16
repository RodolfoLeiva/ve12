import { Component } from '@angular/core' ;
import { user } from './user';

@Component({

selector:'r-sidebar',
templateUrl: './sidebar.component.html',
styleUrls: ['./sidebar.component.css']

})

export class sidebarComponent	 {
	public user:user;
	public visita:user[];
	public estado:boolean;
	ngOnInit(){
		this.user = new user ('rodolfo','rodolfo.leiva@latam.com','12345678','latam',false);
		this.visita =  [
			new user ('fresia','fresia.rojas@latam.com','12345678','andrea',true),
			new user ('rodolfo','rodolfo.leiva@latam.com','12345678','latam',false),
			new user ('Daniela','daniella.bodren@latam.com','12345678','canarias',true),
		
		
		];
		this.estado=true
		console.log(this.visita)
	}
	cambiar_estado(valor){


	this.estado= valor;
	}
}

