import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminateButtonComponent } from './eliminate-button.component';

describe('EliminateButtonComponent', () => {
  let component: EliminateButtonComponent;
  let fixture: ComponentFixture<EliminateButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminateButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EliminateButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
