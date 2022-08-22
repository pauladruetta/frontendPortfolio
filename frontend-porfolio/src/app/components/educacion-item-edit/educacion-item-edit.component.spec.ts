import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducacionItemEditComponent } from './educacion-item-edit.component';

describe('EducacionItemEditComponent', () => {
  let component: EducacionItemEditComponent;
  let fixture: ComponentFixture<EducacionItemEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EducacionItemEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EducacionItemEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
