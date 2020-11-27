import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindPorPersonaComponent } from './find-por-persona.component';

describe('FindPorPersonaComponent', () => {
  let component: FindPorPersonaComponent;
  let fixture: ComponentFixture<FindPorPersonaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindPorPersonaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FindPorPersonaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
