import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InlineblkComponent } from './inlineblk.component';

describe('InlineblkComponent', () => {
  let component: InlineblkComponent;
  let fixture: ComponentFixture<InlineblkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InlineblkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InlineblkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
