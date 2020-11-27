import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PorPersonaComponent } from './por-persona.component';

describe('PorPersonaComponent', () => {
  let component: PorPersonaComponent;
  let fixture: ComponentFixture<PorPersonaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PorPersonaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PorPersonaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
