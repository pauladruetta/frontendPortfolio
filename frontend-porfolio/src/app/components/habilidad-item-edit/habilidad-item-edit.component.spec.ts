import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HabilidadItemEditComponent } from './habilidad-item-edit.component';

describe('HabilidadItemEditComponent', () => {
  let component: HabilidadItemEditComponent;
  let fixture: ComponentFixture<HabilidadItemEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HabilidadItemEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HabilidadItemEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
