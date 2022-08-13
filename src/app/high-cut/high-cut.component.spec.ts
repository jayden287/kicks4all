import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HighCutComponent } from './high-cut.component';

describe('HighCutComponent', () => {
  let component: HighCutComponent;
  let fixture: ComponentFixture<HighCutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HighCutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HighCutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
