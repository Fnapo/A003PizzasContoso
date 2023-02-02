import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarPizzaComponent } from './agregar-pizza.component';

describe('AgregarPizzaComponent', () => {
  let component: AgregarPizzaComponent;
  let fixture: ComponentFixture<AgregarPizzaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarPizzaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarPizzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
