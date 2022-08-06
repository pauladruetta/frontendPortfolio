import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienciaItemEditComponent } from './experiencia-item-edit.component';

describe('ExperienciaItemEditComponent', () => {
  let component: ExperienciaItemEditComponent;
  let fixture: ComponentFixture<ExperienciaItemEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExperienciaItemEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperienciaItemEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
