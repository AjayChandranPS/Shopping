import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CssMediaQueryyComponent } from './css-media-queryy.component';

describe('CssMediaQueryyComponent', () => {
  let component: CssMediaQueryyComponent;
  let fixture: ComponentFixture<CssMediaQueryyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CssMediaQueryyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CssMediaQueryyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
