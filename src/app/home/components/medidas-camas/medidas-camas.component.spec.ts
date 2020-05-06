import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedidasCamasComponent } from './medidas-camas.component';

describe('MedidasCamasComponent', () => {
  let component: MedidasCamasComponent;
  let fixture: ComponentFixture<MedidasCamasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedidasCamasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedidasCamasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
