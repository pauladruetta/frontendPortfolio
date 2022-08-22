import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditionButtonComponent } from './edition-button.component';

describe('EditionButtonComponent', () => {
  let component: EditionButtonComponent;
  let fixture: ComponentFixture<EditionButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditionButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditionButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
