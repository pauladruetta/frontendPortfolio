import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarButtonComponent } from './agregar-button.component';

describe('AgregarButtonComponent', () => {
  let component: AgregarButtonComponent;
  let fixture: ComponentFixture<AgregarButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
