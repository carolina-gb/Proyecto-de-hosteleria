import { Injectable } from '@angular/core';
import { Element } from './interface/element';
import { ELEMENT_DATA } from './ELEMENT_DATA';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminserviceService {
  private dataSource: BehaviorSubject<Element[]> = new BehaviorSubject<Element[]>([]);
  element2: Element = {} as Element;

  constructor(private router: Router) { }

  getTableElements(element: Element) {
    this.element2 = element;
    console.log('elemento:', this.element2);
  }

  getdataSource(): Observable<Element[]> {
    return this.dataSource.asObservable();
  }

  addElement(element: Element) {
    const currentData = this.dataSource.getValue();
    const isDuplicate = currentData.some(item => item.position === element.position && item.name === element.name);
  
    if (!isDuplicate) {
      const newElement: Element = { ...element }; // Crear una nueva instancia de Element
      const updatedData = [...currentData, newElement];
      this.dataSource.next(updatedData);
      console.log('datos:', updatedData);
    }
  }
  

  deleteElement(element: Element) {
    const currentData = this.dataSource.getValue();
    const index = currentData.findIndex(item => item.position === element.position && item.name === element.name);

    if (index >= 0) {
      currentData.splice(index, 1);
      this.dataSource.next(currentData);
    }
  }

  modifyElement(element: Element) {
    const currentData = this.dataSource.getValue();
    const index = currentData.findIndex(item => item.position === element.position && item.name === element.name);
  
    if (index >= 0) {
      const updatedElement: Element = { ...element }; // Crear una nueva instancia de Element
      currentData[index] = updatedElement;
      this.dataSource.next(currentData);
    }
  }
}