import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindModifyComponent } from './find-modify.component';

describe('FindModifyComponent', () => {
  let component: FindModifyComponent;
  let fixture: ComponentFixture<FindModifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindModifyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FindModifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
