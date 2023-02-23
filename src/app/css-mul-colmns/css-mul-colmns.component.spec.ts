import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CssMulColmnsComponent } from './css-mul-colmns.component';

describe('CssMulColmnsComponent', () => {
  let component: CssMulColmnsComponent;
  let fixture: ComponentFixture<CssMulColmnsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CssMulColmnsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CssMulColmnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
