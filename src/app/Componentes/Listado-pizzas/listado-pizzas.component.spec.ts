import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoPizzasComponent } from './listado-pizzas.component';

describe('ListadoPizzasComponent', () => {
  let component: ListadoPizzasComponent;
  let fixture: ComponentFixture<ListadoPizzasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoPizzasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListadoPizzasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
