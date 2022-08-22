import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectoItemEditComponent } from './proyecto-item-edit.component';

describe('ProyectoItemEditComponent', () => {
  let component: ProyectoItemEditComponent;
  let fixture: ComponentFixture<ProyectoItemEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProyectoItemEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProyectoItemEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
