import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienciasPageComponent } from './experiencias-page.component';

describe('ExperienciasPageComponent', () => {
  let component: ExperienciasPageComponent;
  let fixture: ComponentFixture<ExperienciasPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExperienciasPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperienciasPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
