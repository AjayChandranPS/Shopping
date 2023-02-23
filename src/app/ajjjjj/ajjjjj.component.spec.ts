import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjjjjjComponent } from './ajjjjj.component';

describe('AjjjjjComponent', () => {
  let component: AjjjjjComponent;
  let fixture: ComponentFixture<AjjjjjComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjjjjjComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjjjjjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
