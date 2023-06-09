import { Component } from '@angular/core';
import { AdminserviceService } from '../adminservice.service';
import { Element } from '../interface/element';


@Component({
  selector: 'app-edit-rooms',
  templateUrl: './edit-rooms.component.html',
  styleUrls: ['./edit-rooms.component.css']
})
export class EditRoomsComponent{
  elements: Element = {} as Element;
  nombre: string = '';
  posicion: number = 0;
  piso: number = 0;
  costo: number = 0;
  tipo: string = '';

constructor(private adminService: AdminserviceService) { 
  
}

modificar(){
  this.elements.name=this.nombre;
  this.elements.position=this.posicion;
  this.elements.piso=this.piso;
  this.elements.costo=this.costo;
  this.elements.tipo=this.tipo;
  this.adminService.modifyElement(this.elements);
}

agregar(){
  this.elements.name=this.nombre;
  this.elements.position=this.posicion;
  this.elements.piso=this.piso;
  this.elements.costo=this.costo;
  this.elements.tipo=this.tipo;
  this.adminService.addElement(this.elements);
}
}
