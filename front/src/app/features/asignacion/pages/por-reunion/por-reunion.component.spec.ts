import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PorReunionComponent } from './por-reunion.component';

describe('PorReunionComponent', () => {
  let component: PorReunionComponent;
  let fixture: ComponentFixture<PorReunionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PorReunionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PorReunionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
