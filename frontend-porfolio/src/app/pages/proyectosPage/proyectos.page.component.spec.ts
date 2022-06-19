import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectosPageComponent } from './proyectos.page.component';

describe('ProyectosComponent', () => {
  let component: ProyectosPageComponent;
  let fixture: ComponentFixture<ProyectosPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProyectosPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProyectosPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
