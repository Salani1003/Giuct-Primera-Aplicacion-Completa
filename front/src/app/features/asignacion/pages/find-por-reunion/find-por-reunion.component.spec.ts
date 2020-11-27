import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindPorReunionComponent } from './find-por-reunion.component';

describe('FindPorReunionComponent', () => {
  let component: FindPorReunionComponent;
  let fixture: ComponentFixture<FindPorReunionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindPorReunionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FindPorReunionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
