import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinMaxHgtWdtComponent } from './min-max-hgt-wdt.component';

describe('MinMaxHgtWdtComponent', () => {
  let component: MinMaxHgtWdtComponent;
  let fixture: ComponentFixture<MinMaxHgtWdtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MinMaxHgtWdtComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MinMaxHgtWdtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
