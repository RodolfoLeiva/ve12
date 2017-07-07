'use estrict'
import { Component } from '@angular/core' ;
import { workflowicon } from './tableroworkflow';
import { CommonModule } from '@angular/common';

@Component({

selector:'r-tableroworkflow',
templateUrl: './tableroworkflow.component.html',

styleUrls: [
		'./tableroworkflow.css'

    ],

})
export class tableroworkflowComponent	 {
	public tablerowf:workflowicon[];
	public estado:boolean;
	ngOnInit(){
		this.tablerowf =  [
			new workflowicon ('Contratos','3','folder','wfcontratos',true),
			new workflowicon ('Pedidos','1','shopping_cart','wfpedidos',true),
			new workflowicon ('Workflow','7','shopping_basket','wfsolicitudes',true),
			new workflowicon ('Vacaciones','8','airplanemode_active','wfvaczciones',true)
		];
		this.estado=true
		console.log(this.tablerowf)
	}
	cambiar_estado(valor){


	this.estado= valor;
	}

}