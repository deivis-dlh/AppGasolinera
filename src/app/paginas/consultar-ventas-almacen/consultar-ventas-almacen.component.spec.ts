import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarVentasAlmacenComponent } from './consultar-ventas-almacen.component';

describe('ConsultarVentasAlmacenComponent', () => {
  let component: ConsultarVentasAlmacenComponent;
  let fixture: ComponentFixture<ConsultarVentasAlmacenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultarVentasAlmacenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultarVentasAlmacenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
