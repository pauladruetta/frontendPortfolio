import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewimageComponent } from './newimage.component';

describe('NewimageComponent', () => {
  let component: NewimageComponent;
  let fixture: ComponentFixture<NewimageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewimageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewimageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
