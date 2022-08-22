import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HabilidadesItemComponent } from './habilidades-item.component';

describe('HabilidadesItemComponent', () => {
  let component: HabilidadesItemComponent;
  let fixture: ComponentFixture<HabilidadesItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HabilidadesItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HabilidadesItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
