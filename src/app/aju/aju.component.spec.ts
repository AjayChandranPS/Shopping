import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjuComponent } from './aju.component';

describe('AjuComponent', () => {
  let component: AjuComponent;
  let fixture: ComponentFixture<AjuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
