import { Component, OnInit } from '@angular/core';
import { AdminserviceService } from '../adminservice.service';
import { Element } from '../interface/element';
import { Router } from '@angular/router';


@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit{

  constructor(private adminService: AdminserviceService, private router: Router) {}

  ngOnInit(): void {}

  refreshTable() {
    this.dataSource = this.adminService.getdataSource();
  }

  displayedColumns = ['position', 'name', 'piso', 'costo', 'tipo', 'actions'];
  dataSource = this.adminService.getdataSource();

  editable: boolean = false;

  editRow(element: Element) {
    this.editable = true;
    this.adminService.getTableElements(element);
    console.log('Editar fila:', element);
  }

  deleteRow(element: Element) {
    this.adminService.deleteElement(element);
    this.reloadComponent();
    console.log('Eliminar fila:', element);
  }

  reloadComponent() {
    this.router.navigateByUrl('/refresh', { skipLocationChange: true }).then(() => {
      this.router.navigate([this.router.url]);
    });
  }
}