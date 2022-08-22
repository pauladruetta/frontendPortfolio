import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LectorImagenComponent } from './lector-imagen.component';

describe('LectorImagenComponent', () => {
  let component: LectorImagenComponent;
  let fixture: ComponentFixture<LectorImagenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LectorImagenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LectorImagenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
