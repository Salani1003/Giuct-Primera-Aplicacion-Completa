import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindDelComponent } from './find-del.component';

describe('FindDelComponent', () => {
  let component: FindDelComponent;
  let fixture: ComponentFixture<FindDelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindDelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FindDelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
