import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CancelarButtonComponent } from './cancelar-button.component';

describe('CancelarButtonComponent', () => {
  let component: CancelarButtonComponent;
  let fixture: ComponentFixture<CancelarButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CancelarButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CancelarButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
