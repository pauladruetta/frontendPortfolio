import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AceptarButtonComponent } from './aceptar-button.component';

describe('AceptarButtonComponent', () => {
  let component: AceptarButtonComponent;
  let fixture: ComponentFixture<AceptarButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AceptarButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AceptarButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
