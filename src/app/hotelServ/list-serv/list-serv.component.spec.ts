import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListServComponent } from './list-serv.component';

describe('ListServComponent', () => {
  let component: ListServComponent;
  let fixture: ComponentFixture<ListServComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListServComponent]
    });
    fixture = TestBed.createComponent(ListServComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
