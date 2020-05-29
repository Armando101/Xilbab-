import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedidaCamaComponent } from './medida-cama.component';

describe('MedidaCamaComponent', () => {
  let component: MedidaCamaComponent;
  let fixture: ComponentFixture<MedidaCamaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedidaCamaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedidaCamaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
