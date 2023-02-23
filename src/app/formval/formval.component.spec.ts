import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormvalComponent } from './formval.component';

describe('FormvalComponent', () => {
  let component: FormvalComponent;
  let fixture: ComponentFixture<FormvalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormvalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormvalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
