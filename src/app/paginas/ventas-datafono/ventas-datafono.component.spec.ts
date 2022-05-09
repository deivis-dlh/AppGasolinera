import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VentasDatafonoComponent } from './ventas-datafono.component';

describe('VentasDatafonoComponent', () => {
  let component: VentasDatafonoComponent;
  let fixture: ComponentFixture<VentasDatafonoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VentasDatafonoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VentasDatafonoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
