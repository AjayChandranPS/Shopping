import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjectPositionComponent } from './object-position.component';

describe('ObjectPositionComponent', () => {
  let component: ObjectPositionComponent;
  let fixture: ComponentFixture<ObjectPositionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObjectPositionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObjectPositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
